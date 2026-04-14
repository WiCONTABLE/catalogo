const miTelefono = "573156016386";

const productos = [
    {
        id: 1,
        nombre: "EventoRAD (DIAN)",
        desc: "<b>REF008</b> <p>Optimiza tu gestión tributaria con una solución que automatiza los 3 eventos RADIAN ante la DIAN. Estos eventos obligatorios, confirman la recepción y aceptación de las facturas electrónicas, permitiendo que sean válidas como soporte de costos y deducciones fiscales.<p> <p>Reduce tareas manuales, evita errores y cumple oportunamente con la normativa, brindando mayor control y tranquilidad en tus procesos contables.<p><b>Podrás utilizarla de la siguiente manera:</b>",
        caracteristicas: ["Genera Token DIAN.", "Selecciona el periodo y digita las credenciales del responsable.", "Y emite los siguientes eventos: 01 Acuse de Recibo, 02 Recibo del Bien, 03 Aceptación Expresa."],
        nota: "Se trata de una aplicación ejecutable (EXE) que se configura y licencia de forma remota mediante AnyDesk. Funciona con un pago único por PC que tenga sistema operativo Windows 10/11 y se mantiene operativa de manera indefinida, excepto en caso de cambios estructurales en la plataforma de la DIAN; <b>Conserve su ID (Puesto de trabajo) anydesk para futuros soportes.</b>",
        precio: "COP $89.900",
        video: "#",
        fotos: ["img/p0-0.png"]
    },
    {
        id: 2,
        nombre: "ZIPs Downloader (DIAN)",
        desc: "<b>REF007</b> <p>Descarga masivamente los archivos ZIP de facturación electrónica desde la DIAN de forma rápida y organizada. Olvídate de procesos manuales: obtén los ZIP y accede a sus PDF y XML para integrarlos a tu ERP o usarlos en análisis y control interno. Ideal para ahorrar tiempo y optimizar tu gestión tributaria.<p><b>Podrás utilizarla de la siguiente manera:</b>",
        caracteristicas: ["Carga listados de CUFE desde archivos XLSX.", "Genera TOKEN e inicia sesión DIAN, y obtendras masivamente los ZIPs en menos tiempo.", "Permite auditar ZIPs ya descargados para evitar reprocesos en caso de caidas WEB."],
        nota: "La aplicación es una extensión web cuya configuración inicial y activación de licencia por PC se realizan de forma remota mediante AnyDesk. Funciona con un pago único y se mantiene operativa de manera indefinida, salvo que se presenten cambios estructurales en la plataforma de la DIAN; <b>Conserve su ID (Puesto de trabajo) anydesk para futuros soportes.</b>",
        precio: "COP $50.000",
        video: "https://www.youtube.com/watch?v=CTyjiL5TMgg",
        fotos: ["img/p1-0.png","img/p1-1.jpg","img/p1-2.jpg"]
    },
    {
        id: 3,
        nombre: "PDFs Downloader (DIAN)",
        desc: "<b>REF006</b> <p>Accede y descarga cualquier documento electrónico en PDF directamente desde la DIAN de forma rápida, sencilla y sin procesos manuales innecesarios.<p><b>Podrás utilizarla de la siguiente manera:</b>",
        caracteristicas: ["Carga un archivo EXCEL ó pega directamente los CUDE, CUDS, CUFE, CUNE.", "Procesa en tiempo de respuesta según captcha de 3, 6, 9 segundos por documento.", "Extra aplicativo (WiPDFs) para desbloquear vista previa, renombrar nómina y listar archivos.", "No necesitas generar TOKEN, ni iniciar sesion DIAN para generar la descarga PDF."],
        nota: "La aplicación es una extensión web cuya configuración inicial y activación de licencia por PC se realizan de forma remota mediante AnyDesk. Funciona con un pago único y se mantiene operativa de manera indefinida, salvo que se presenten cambios estructurales en la plataforma de la DIAN; <b>Conserve su ID (Puesto de trabajo) anydesk para futuros soportes.</b>",
        precio: "COP $30.000",
        video: "https://www.youtube.com/watch?v=hiZn2nFgtX4&t",
        fotos: ["img/p2-0.png", "img/p2-1.png", "img/p2-2.jpg","img/p2-3.png"]
    },
    {
        id: 4,
        nombre: "Consulta NIT / CC (DIAN)",
        desc: "<b>REF005</b><p>Verifica de forma masiva y automática el nombre asociado a cédulas o NIT, sin procesos manuales ni captchas repetitivos.<p> <p>Ideal para temporada de exógena y validación ágil del estado de proveedores.<p><b>Podrás utilizarla de la siguiente manera:</b>",
        caracteristicas: ["Carga un archivo EXCEL ó pega directamente las identificaciones.", "Puedes decidir en consultar CON estado RUT, la cual te anexara si esta: ACTIVO, CANCELADO ó SUSPENDIDO; este proceso valida catpcha y depende si el portal web se encuentre estable.", "Puedes decidir en consultar SIN estado RUT, la cual es más ligero y estable; este proceso solo te indica si esta registrado o no en la DIAN."],
        nota: "La aplicación es una extensión web cuya configuración inicial y activación de licencia por PC se realizan de forma remota mediante AnyDesk. Funciona con un pago único y se mantiene operativa de manera indefinida, salvo que se presenten cambios estructurales en la plataforma de la DIAN; <b>Conserve su ID (Puesto de trabajo) anydesk para futuros soportes.</b>",
        precio: "COP $30.000",
        video: "https://www.youtube.com/watch?v=1wLEFzIwj38",
        fotos: ["img/p3-0.png", "img/p3-1.jpg"]
    },
    {
        id: 5,
        nombre: "Microsoft COPILOT 365",
        desc: "<b>REF004</b><p>Activa de forma segura con credenciales corporativas y evita el uso de parches o cracks que comprometen la seguridad de tu PC.<p><b>Podrás utilizarla de la siguiente manera:</b>",
        caracteristicas: ["Activación en hasta 5 dispositivos.", "Licencia vitalicia.", "Compatible con PC / Android / iOS.", "100 GB de almacenamiento.", "IA vía web para mayor productividad", "Tendras acceso a PowerBI Service." , "Toda la suite 365 para sacar el masivo provecho en el día a día laboral."],
        nota: "Se entrega un correo corporativo con una clave temporal. El usuario es responsable de asignar su propia clave personalizada. La credencial tiene un costo de pago único. En caso de pérdida de la clave creada por el usuario, no será posible recuperar el acceso, <b>se brinda apoyo para la instalación de manera remota mediante AnyDesk.</b>",
        precio: "COP $30.000",
        video: "https://youtu.be/jKVPmmDu1-I",
        fotos: ["img/p4-0.png", "img/p4-1.png"]
    },
    {
        id: 6,
        nombre: "WiCONTABLE PRO",
        desc: "<b>REF003</b><p>Facilita la auditoría de Facturas Electrónicas a crédito, permitiendo identificar cuáles eventos RADIAN se han registrado y asegurando un control preciso de cada transacción con precisión y cumplimiento sin errores manuales en sus compras y poder acceder a beneficios tributarios.<p><b>Podrás utilizarla de la siguiente manera:</b>",
        caracteristicas: ["Módulo NIT, permite realizar la consulta masiva de los nombres asociados tanto CON ó SIN el estado de ellos en su RUT.", "Se incluye 7 listados que suministra la DIAN (Ficticios, Autoretenedores, IVA, entre otros para la respectiva auditoria.", "Módulo F.E, Permite la descarga masiva de ZIP, audita los eventos asignados, desgloce de impuestos y renombrar archivos."],
        nota: "Es una plantilla Excel cuya configuración inicial y activación de licencia por PC con sistema operativo Windows 10/11 se realiza de forma remota mediante AnyDesk, con un pago único. La herramienta se mantiene operativa de manera indefinida, salvo que se presenten cambios estructurales en la plataforma de la DIAN. Se recomienda tener Office 2021 o superior; <b>Conserve su ID (Puesto de trabajo) anydesk para futuros soportes.</b>",
        precio: "COP $100.000",
        video: "https://youtu.be/IZ5MVPrRxkw",
        fotos: ["img/p5-0.png", "img/p5-1.png", "img/p5-2.png", "img/p5-3.png", "img/p5-4.png"]
    },
    {
        id: 7,
        nombre: "Control Cartera (Pagadiario)",
        desc: "<b>REF002</b><p>Gestiona de manera eficiente la cartera diaria de prestamistas de dinero a interés simple. Controla pagos, calcula intereses automáticamente y organiza la información de cada cliente, evitando errores y simplificando la administración de préstamos diarios.<p><b>Podrás utilizarla de la siguiente manera:</b>",
        caracteristicas: ["Controlar fechas de cobro de forma organizada.", "Hacer seguimiento a vencimientos y evitar retrasos.", "Generar recibos automáticos con un solo clic.", "Modificar la herramienta a tu gusto (se entrega con código abierto)."],
        nota: "Es una plantilla Excel cuya configuración esta diseñada para trabajar en sistema operativo Windows. Funciona con un pago único y se mantiene operativa de forma indefinida; <b>se puede ejecutar en cualquier versión de office escritorio.</b>",
        precio: "COP $30.000",
        video: "https://youtu.be/UK9z8OsG0MI",
        fotos: ["img/p6-0.png", "img/p6-1.png", "img/p6-2.png", "img/p6-3.png", "img/p6-4.png"]
    },
    {
        id: 8,
        nombre: "WiCONTABLE Lite",
        desc: "<b>REF001</b><p>La primera solución pensada para contadores y profesionales financieros que permite consultar de manera masiva en 4 plataformas clave: DIAN, PROCURADURIA, RUES Y SISBÉN.<p><b>Podrás utilizarla de la siguiente manera:</b>",
        caracteristicas: ["Ideal para temporada de Exogena podras validar los nombres asociados a los Nit ó cédulas.", "Organiza tus obligaciones tributarias en el entorno calendario.", "Localmente podras convertir Imagen a PDF, Unir PDF y aplicar OCR.", "Accede aun repositorio contable amplio para estar al día."],
        nota: "Se trata de una aplicación ejecutable (EXE) que se configura y licencia de forma remota mediante AnyDesk. Funciona con un pago único por PC que tenga sistema operativo Windows 10/11 y se mantiene operativa de manera indefinida, excepto en caso de cambios estructurales en las plataformas; <b>Conserve su ID (Puesto de trabajo) anydesk para futuros soportes.</b>",
        precio: "COP $69.900",
        video: "https://www.youtube.com/watch?v=wSLnpNUn2dE&t=279s",
        fotos: ["img/p7-0.png", "img/p7-1.png", "img/p7-2.png", "img/p7-3.png", "img/p7-4.png", "img/p7-5.png", "img/p7-6.png", "img/p7-7.png", "img/p7-8.png", "img/p7-9.png", "img/p7-10.png"]
    },
    {
        id: 9,
        nombre: "Win 10/11 PRO (Retail)",
        desc: "<b>REF000</b><p>Activa de forma segura con credenciales corporativas y evita el uso de parches o cracks que comprometen la seguridad de tu PC.<p><b>Podrás utilizarla de la siguiente manera:</b>",
        caracteristicas: ["Ingresa la clave digital asignada y listo.", "Es transferible, puedes cámbiarla a otro equipo fácilmente.", "Instalala en equipos nuevos o existentes.", "Credenciales independientes - No se vincula a hardware especifico."],
        nota: "Se entrega la clave al usuario final, quien es responsable de su buen uso. La clave permanece operativa de manera indefinida, garantizando acceso continuo y seguridad en todo momento. <b>único pago.</b>",
        precio: "COP $30.000",
        video: "https://wa.me/p/25488746717402749/573156016386",
        fotos: ["img/p8-0.png", "img/p8-1.png"]
    },
    {
        id: 10,
        nombre: "Anydesk V.6.0",
        desc: "El software de escritorio remoto de alto rendimiento que permite compartir el escritorio sin latencia, un control remoto estable y una transmisión de datos rápida y segura entre dispositivos.<p><b>Podrás utilizarla de la siguiente manera:</b><p>",
        caracteristicas: ["Vea la pantalla de otro dispositivo o comparta su monitor con otros usuarios.", "Controle el teclado y el ratón de otro dispositivo o permita que otros usuarios interactúen con su pantalla.", "Acceda a su dispositivo remoto mediante contraseña sin tener que aceptar la sesión remota manualmente."],
        nota: "Se trata de una aplicación ejecutable (EXE) ha sido ajustada para mantener siempre la sesión activa y sin tiempos; la aplicación se mantiene operativa de forma indefinida. <b>Se recomienda no actualizar y mantener la versión inicial.</b>",
        precio: "COP $20.000",
        video: "https://wa.me/p/34854620340817944/573156016386",
        fotos: ["img/p9-0.png"]
    },
    {
        id: 11,
        nombre: "Plataformas/Membresías",
        desc: "Te invitamos a visualizar nuestro catalogo de ocio, producción y entretenimiento con los mejores precios del mercado.<p><b>Podrás encontrar:</b><p>",
        caracteristicas: ["Plataformas Streaming.", "Antivirus.", "IA.", "VPN.", "Diseño.", "Cursos.", "Juegos"],
        nota: "Las membresias son en la mayoria mensuales y otras con oferta de hasta 3 y 12 meses. <b>Escribenos al 3156016386 y podemos ampliar la información de interes.</b>",
        precio: "Desde COP $3.500",
        video: "https://www.notion.so/26f38a697b938075bfa7ff2855b3979e?v=26f38a697b9380528647000c4043686b",
        fotos: ["img/p10-0.png"]
    },
    {
        id: 12,
        nombre: "Declaración de Renta",
        desc: "Brindamos consultoría integral para la elaboración y presentación de tu declaración de renta, asegurando el cumplimiento legal y la optimización de tus impuestos.",
        caracteristicas: ["Diagnóstico inicial de requisitos según topes de la DIAN.", "Análisis de deducciones y beneficios tributarios para pagar lo justo.", "Elaboración del borrador y formulario 110/210.", "Acompañamiento en el proceso de pago y firma electrónica.", "Entrega de informe detallado de la declaración presentada."],
        nota: "El valor del servicio puede variar según la complejidad de la realidad financiera del contribuyente (cantidad de bienes, inversiones, etc.). <b>¡Contáctanos para una cotización personalizada!</b>",
        precio: "Desde COP $300.000",
        video: "#",
        fotos: ["img/p11-0.png"]
    }
];
