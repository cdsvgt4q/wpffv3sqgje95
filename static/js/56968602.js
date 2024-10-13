var cc = initCookieConsent();
cc.run({
  current_lang: "es",
  autoclear_cookies: !0,
  page_scripts: !0,
  delay: 1e3,
  auto_language: "browser",
  force_consent: !0,
  cookie_name: "aviso2024",
  onFirstAction: function (e, a) {},
  onAccept: function (e) {},
  onChange: function (e, a) {},
  languages: {
    es: {
      consent_modal: {
        title: "Atención",
        description:
          "Esta web no aloja, distribuye ni almacena ningún contenido en sus servidores. Todo el material al que se pueda acceder a través de esta web está alojado en servidores externos sobre los cuales no tenemos control ni responsabilidad.",
        primary_btn: { text: "Aceptar", role: "accept_all" },
      },
      settings_modal: {
        title: "Configuración de cookies",
        save_settings_btn: "Guardar",
        accept_all_btn: "Permitirlas todas",
        reject_all_btn: "Rechazarlas todas",
        close_btn_label: "Cerrar",
        blocks: [
          {
            title: "Uso de cookies 📢",
            description:
              'Utilizamos cookies para ofrecerte una mejor experiencia en nuestro servicio y garantizar las funcionalidades básicas. Puede elegir para cada categoría la opción de aceptar/rechazar cuando lo desee. Para obtener más detalles sobre las cookies y otros datos sensibles, lea: <a href="/privacidad.html" class="cc-link">Política de Privacidad</a>.',
          },
          {
            title: "Cookies estrictamente necesarias",
            description:
              "Estas cookies son esenciales para el correcto funcionamiento de la web. Sin estas cookies, la web no funcionaría correctamente.",
            toggle: { value: "necessary", enabled: !0, readonly: !0 },
          },
          {
            title: "Cookies de rendimiento",
            description:
              "Estas cookies nos permiten contar las visitas y fuentes de circulación para poder medir y mejorar el desempeño de nuestro sitio. Nos ayudan a saber qué páginas son las más o menos populares, y ver cuántas personas visitan el sitio. Toda la información que recogen estas cookies es agregada y, por lo tanto, anónima. Si no permite estas cookies no sabremos cuándo visitó nuestro sitio, y por lo tanto no podremos saber cuándo lo visitó.",
            toggle: { value: "analytics", enabled: !0, readonly: !1 },
          },
          {
            title: "Cookies dirigidas",
            description:
              "Estas cookies pueden estar en todo el sitio web, colocadas por nuestros socios publicitarios. Estos negocios pueden utilizarlas para crear un perfil de sus intereses y mostrarle anuncios relevantes en otros sitios. No almacenan información personal directamente, sino que se basan en la identificación única de su navegador y dispositivo de acceso al Internet. Si no permite estas cookies, tendrá menos publicidad dirigida.",
            toggle: { value: "targeting", enabled: !0, readonly: !1 },
          },
          {
            title: "Más información",
            description:
              'Para cualquier consulta en relación con nuestra política de cookies y sus opciones, por favor <a class="cc-link" href="/contacto.html">contacta con nosotros</a>.',
          },
        ],
      },
    },
  },
  gui_options: { consent_modal: { layout: "bar" } },
});
