package org.edu.tp4lab4back;

// SDK de Mercado Pago
import com.mercadopago.MercadoPagoConfig;
import com.mercadopago.client.preference.PreferenceBackUrlsRequest;
import com.mercadopago.client.preference.PreferenceClient;
import com.mercadopago.client.preference.PreferenceItemRequest;
import com.mercadopago.client.preference.PreferenceRequest;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.preference.Preference;
import org.edu.tp4lab4back.modelo.Pedido;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class MercadoPagoControlador {

    // Configurar el token de acceso una vez en un bloque estático
    static {
        MercadoPagoConfig.setAccessToken("TEST-5213477734294915-052408-4c91610b979b5a797bbc5e8a94072569-31055607");
    }

    public PreferenceMP getPreferenciaIdMercadoPago(Pedido pedido) {
        try {
            PreferenceItemRequest itemRequest = PreferenceItemRequest.builder()
                    .id(Long.toString(pedido.getIdPedido()))
                    .description("Pedido solicitado")
                    .pictureUrl("https://img-global.cpcdn.com/recipes/0709fbb52d87d2d7/1200x630cq70/photo.jpg")
                    .quantity(1)
                    .currencyId("ARS")
                    .unitPrice(new BigDecimal(pedido.getTotalPedido()))
                    .build();
            List<PreferenceItemRequest> items = new ArrayList<>();
            items.add(itemRequest);

            PreferenceBackUrlsRequest backURL = PreferenceBackUrlsRequest.builder()
                    .success("http://localhost:5173/mpsuccess")
                    .pending("http://localhost:5173/mppending")
                    .failure("http://localhost:5173/mpfailure")
                    .build();

            PreferenceRequest preferenceRequest = PreferenceRequest.builder()
                    .items(items)
                    .backUrls(backURL)
                    .build();

            PreferenceClient client = new PreferenceClient();
            Preference preference = client.create(preferenceRequest);

            PreferenceMP mpPreference = new PreferenceMP();
            mpPreference.setStatusCode(preference.getResponse().getStatusCode());
            mpPreference.setId(preference.getId());
            return mpPreference;

        } catch (MPApiException apiException) {
            System.err.println("MPApiException: " + apiException.getMessage());
            System.err.println("Status Code: " + apiException.getStatusCode());
            System.err.println("Response: " + apiException.getApiResponse().getContent());
            apiException.printStackTrace();
        } catch (MPException mpException) {
            System.err.println("MPException: " + mpException.getMessage());
            mpException.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @PostMapping("/create-preference-mp")
    public PreferenceMP createPreferenceMP(@RequestBody Pedido pedido) {
        return getPreferenciaIdMercadoPago(pedido);
    }

}
