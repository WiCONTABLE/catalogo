const miTelefono = "@wicontable";
const miTelegram = "https://telegram.me/wicontable";

const productos = [
           {
        id: 2,
        nombre: "PDFs/ZIP Downloader (DIAN)",
        url: "pdfs-downloader.html",
        formato: "Extensión Web .crx",
        mostrarTecnica: true,
        etiqueta: "¡EN PRODUCCION!",
        desc: "<b>REF006</b> <p>Optimiza tu gestión contable. Consulta y descarga de forma individual o masiva facturas electrónicas, notas crédito, notas débito y otros documentos electrónicos desde los servicios de la DIAN, en formatos PDF y ZIP según su disponibilidad. Organiza documentos, procesa archivos Excel y automatiza tareas repetitivas mediante CUFE, CUDE y NIT, con una solución diseñada para contadores y empresas.<p><br><b>Actualizada el 16-11-2026</b>",
        caracteristicas: [
            "<div class=\"feature-block\"><p class=\"feature-block-title\">🚀 Simplifica tu gestión documental y contable</p><p>Reduce las tareas repetitivas de consulta, descarga y organización de documentos electrónicos de la DIAN. Procesa información de forma individual o masiva y ahorra tiempo en tus actividades contables.</p></div>",
            "<div class=\"feature-block\"><p class=\"feature-block-title\">✅ Consultas sin trámites adicionales</p><p>Para las consultas compatibles, no necesitas generar tokens ni adquirir un certificado digital adicional. Utiliza los identificadores de tus documentos y los datos requeridos por cada servicio de la DIAN.</p></div>",
            "<div class=\"feature-block\"><p class=\"feature-block-title\">📄 Módulo F.E - N.C - N.D | Descarga rápida de PDF</p><p>Descarga facturas electrónicas, notas crédito y notas débito mediante sus identificadores CUFE/CUDE. Importa tus registros desde Excel, arrastra el archivo directamente al módulo o pega los códigos para realizar descargas individuales y masivas de manera ágil.</p></div>",
            "<div class=\"feature-block\"><p class=\"feature-block-title\">🌐 Módulo CUDE - CUNE - CUDS - CUFE | Descarga pública multidocumento</p><p>Consulta y descarga diferentes tipos de documentos electrónicos utilizando sus identificadores y la información tributaria requerida, como el NIT.</p><p>Carga tus registros desde Excel y automatiza el diligenciamiento de consultas. Cuando la DIAN solicite una verificación de seguridad o CAPTCHA de manera automática lo realizará.</p></div>",
            "<div class=\"feature-block\"><p class=\"feature-block-title\">📦 Módulo Descarga ZIP | Descarga y organización masiva</p><p>Aprovecha tu sesión activa en la DIAN para descargar archivos ZIP de facturas electrónicas a partir de listados Excel.</p><ul class=\"feature-sublist\"><li>Identifica documentos procesados y fallidos.</li><li>Reintenta únicamente las descargas fallidas.</li><li>Selecciona una carpeta local para administrar tus archivos ZIP.</li><li>Analiza y renombra archivos ZIP mediante identificadores CUFE/CUDE.</li></ul></div>",
            "<div class=\"feature-block\"><p class=\"feature-block-title\">🛠️ Módulo Tools PDF | Gestión documental y reportes contables</p><p>Organiza y procesa tus documentos PDF directamente desde tu equipo:</p><ul class=\"feature-sublist\"><li>Renombra archivos masivamente utilizando datos del documento, fecha, emisor, receptor e identificadores tributarios.</li><li>Genera listados de archivos y subcarpetas.</li><li>Extrae información disponible de facturas electrónicas y notas crédito.</li><li>Exporta reportes Excel con información de documentos, ítems, bases gravables, tarifas de IVA, impuestos y terceros.</li><li>Facilita la vista previa de archivos PDF mediante una herramienta auxiliar compatible con Windows.</li></ul></div>",
            "<div class=\"feature-block\"><p class=\"feature-block-title\">📊 Excel como aliado de tu contabilidad</p><p>Importa listados para realizar consultas masivas y genera reportes estructurados que facilitan la revisión documental, los cruces de información y la preparación de informes contables.</p></div>",
            "<div class=\"feature-block\"><p class=\"feature-block-title\">🏢 Gestión de múltiples empresas</p><p>Una herramienta diseñada para profesionales contables que administran documentos electrónicos de diferentes clientes y empresas, con las condiciones de uso establecidas en la licencia adquirida.</p></div>",
            "<div class=\"feature-block\"><p class=\"feature-block-title\">🔐 Procesamiento local y control del usuario</p><p>Las herramientas de organización y generación de reportes trabajan con los archivos seleccionados en tu equipo. Las consultas y descargas utilizan los servicios correspondientes de la DIAN.</p></div>",
            "<div class=\"feature-closing\"><b>WiCONTABLE: menos tareas repetitivas, más tiempo para tu gestión contable.</b></div>"
        ],
        nota: "<p>En <b>WiCONTABLE</b> queremos que puedas comenzar a utilizar nuestra herramienta de forma segura, sencilla y con el acompañamiento necesario.</p><br><p><b>🖥️ Instalación y asistencia remota</b></p><p>Para realizar la instalación, configuración inicial y pruebas de funcionamiento, nuestro equipo técnico utiliza <b>AnyDesk</b>, una herramienta de conexión remota que nos permite brindarte asistencia directamente en tu computador.</p><p>Cada equipo se registra de manera individual durante el proceso de instalación. Por tu seguridad, las comunicaciones de soporte se realizan exclusivamente a través del número de celular o usuario de contacto que hayas registrado con nosotros.</p><p>La conexión remota requiere tu autorización y participación durante la asistencia.</p><br><p><b>🎥 Videotutorial antes de adquirir</b></p><p>Te recomendamos <b>ver el videotutorial antes de realizar la compra</b>. Allí conocerás las principales funcionalidades, los requisitos y el funcionamiento general de la herramienta.</p><p>Esto te permitirá evaluar si se ajusta a tus necesidades contables y aprovechar mejor la capacitación y el acompañamiento durante la instalación.</p><br><p><b>⏱️ Tiempo de instalación y pruebas</b></p><p>Te sugerimos disponer de aproximadamente <b>15 minutos</b> para la instalación y configuración inicial.</p><p>Para comprobar el funcionamiento, es importante contar con un <b>histórico de documentos electrónicos de la DIAN que contenga registros para realizar pruebas</b>.</p><p>Nuestro objetivo es que puedas verificar las funcionalidades contratadas antes de finalizar la asistencia.</p><br><p><b>🔄 Compatibilidad con los servicios de la DIAN</b></p><p>Nuestra herramienta interactúa con plataformas y servicios tecnológicos de terceros, especialmente los sistemas electrónicos de la DIAN.</p><p>Por esta razón, los cambios en sus portales, mecanismos de seguridad, condiciones de acceso o estructuras tecnológicas pueden afectar temporalmente determinadas funcionalidades.</p><p><b>WiCONTABLE no controla la disponibilidad ni las modificaciones realizadas por estas plataformas.</b> Cuando se presenten cambios que afecten el funcionamiento, evaluaremos su impacto y la viabilidad técnica de realizar los ajustes correspondientes, sin garantizar compatibilidad permanente.</p><br><p><b>🔐 Licencia sin fecha de vencimiento</b></p><p>La licencia de nuestra herramienta <b>no tiene una fecha de vencimiento establecida</b>.</p><p>Esto significa que puedes continuar utilizando la versión adquirida mientras se mantengan las condiciones técnicas necesarias para su funcionamiento.</p><p>La licencia sin vencimiento no implica que los servicios de terceros permanezcan disponibles indefinidamente ni que todas las actualizaciones futuras estén incluidas.</p><br><p><b>✅ Nuestro compromiso</b></p><p>En WiCONTABLE buscamos entregarte una herramienta correctamente instalada, configurada y probada, para que puedas incorporarla a tus actividades de gestión documental y contable con mayor tranquilidad.</p>",
        precio: "COP $50.000",
        tipoPago: "Pago único",
        video: "video/WiCONTABLE.mp4",
        youtube: "",
        fotos: ["img/p2-0.webp", "img/p2-1.webp", "img/p2-2.webp","img/p2-3.webp","img/p2-4.webp","img/p2-5.webp","img/p2-6.webp"]
    }, 



          
          {
        id: 6,
        nombre: "Gemini PRO (12 Meses)",
        url: "gemini-pro.html",
        formato: "Credenciales",
        mostrarTecnica: false,
etiqueta: "DISPONIBLE",
        desc: "Disfruta de 12 meses completos de Gemini PRO, con acceso a las funciones avanzadas de inteligencia artificial de Google, además de los beneficios incluidos con la promoción estudiantil.<p><b> </b><p>",
        caracteristicas: ["Acceso a Gemini Pro con tu cuenta personal GMAIL", "Modelos de IA avanzados para mayor rendimiento (Chat / Tarea).", "Investigación más profunda y preparación para exámenes; obtén acceso ampliado en Gemini y Gemini Notebook para analizar hasta 1,500 páginas de tus apunte.", "Más ayuda para escribir y preparación profesional; obtén acceso ampliado para generar un primer borrador, trabajar en tus argumentos y definir mejor tus ideas.", "Creación de contenido potenciada; crea imágenes y videos dinámicos fácilmente con más acceso a Gemini Omni Flash y Nano Banana Pro.", "Creación más rápida de código y proyectos; acceso ampliado a nuestra plataforma de desarrollo de IA: Google Antigravity, Jules, Google Developer Program premium y más.", "5 TB de almacenamiento²; almacenamiento total para Google Fotos, Drive y Gmail.", "Se asiste vía anydesk para canjear el beneficio."],
        nota: "Te en cuenta las siguientes recomendaciones: <b>El enlace es de un solo uso.</b> Se recomienda canjearlo únicamente en la cuenta de Google donde deseas disfrutar el beneficio; Una vez activado correctamente, el servicio quedará asociado a tu cuenta Gmail. <p><br><b>Te realizamos acompañamiento vía Anydesk, para ello tenerlo instalado para poder proceder y para validar una correcta activación, es importante que estes en un PC, no es válido ni en Tablet, ni celular para el acompañamiento. Para agilizar la activación se recomienda que el usuario tenga instalado VPN Proton o cualquiera de su preferencia en windows no validador tipo extensión.</b></p> <br><p>Manejamos pago local COP y Binance USDT.</p> <br><p><b>Tener en cuenta que se brinda garantía por 3 meses y que solo se procede si podemos asistir vía anydesk, de lo contrario no hay garantía.</b> Precio en USDT $10 mediante Binance.<p/>",
        precio: "COP $30.000",
        tipoPago: "Pago único",
        video: "video/Gemini.mp4",
        youtube: "https://youtu.be/f1pKdYerHxg",
        fotos: ["img/p6-0.webp", "img/p6-1.webp", "img/p6-2.webp", "img/p6-3.webp", "img/p6-4.webp", "img/p6-5.webp"]
    },
         {
        id: 7,
        nombre: "WiCONTABLE Lite",
        url: "wicontable-lite.html",
        formato: "Ejecutable .exe",
        mostrarTecnica: true,
        etiqueta: "¡EN PRODUCCION!",
        desc: "<b>REF001</b><p>La primera solución contable que permite consultar de manera masiva en 10 plataformas claves: REGISTRADURIA, PROCURADURIA, SISBÉN, DIAN, POLICIA, RUAF, SISPRO, RUES, SIMIT, FOSYGA. Pensada para contadores y profesionales financieros para optimizar la auditoria de terceros.<p><br><b>Actualizada el XX-11-2026</b>",
        caracteristicas: ["Facilite la depuración de terceros para Exógena, migraciones ERP y otros reportes regulatorios, auditando la identidad fiscal (NIT/C.C.) exigida según los parámetros de consulta de cada entidad.", "¡EN PRODUCCION!", "¡EN PRODUCCION!", "¡EN PRODUCCION!", "¡EN PRODUCCION!", "¡EN PRODUCCION!", "¡EN PRODUCCION!", "¡EN PRODUCCION!", "¡EN PRODUCCION!", "¡EN PRODUCCION!", "¡EN PRODUCCION!"],
        nota: "<p>Para brindarle un soporte técnico oportuno, requerimos conectarnos de forma remota a su equipo a través de AnyDesk.<p> <br><p>Tenga en cuenta que este acceso quedará registrado de manera individual en cada computadora durante la instalación. Por su seguridad, nuestro equipo se comunicará exclusivamente al número de móvil ó @usuario que tiene registrado con nosotros.<p> <br><p>Asimismo, le recordamos que el funcionamiento de nuestra herramienta depende de plataformas de terceros integradas; <b>cualquier cambio en los parámetros de dichas plataformas nos exime de responsabilidad sobre la continuidad del servicio.</b><p> <br><b><p>RECUERDE</b> que es importante ver el videotutorial antes de adquirir la herramienta. De esta manera, al finalizar la instalación, le será más fácil resolver cualquier duda que no se haya abordado en el video.</p> <br><p>Le pedimos disponer de unos 15 minutos mientras realizamos la instalación y para las pruebas de funcionalidad un listado de NIT ó Número documento para consultar. Recuerde que la herramienta no tiene fecha de vencimiento; por ello, nos aseguramos de entregarla probada y funcionando correctamente al momento de su adquisición.</p>",
        precio: "COP $69.900",
        tipoPago: "Pago único",
        video: "video/WiCONTABLE.mp4",
        youtube: "",
        fotos: ["img/p0-0.webp", "img/p0-1.webp"]
    },   
        
     {
        id: 14,
        nombre: "PDF Extract PRO",
        url: "pdfextractpro.html",
        formato: "Ejecutable .exe",
        mostrarTecnica: true,
etiqueta: "ACTIVA",
        desc: "<b>REF009</b><p><b>Concilias Bancos?</b>; esta es una herramienta orientada principalmente a profesionales de finanzas, contabilidad, ingeniería y análisis de datos que requieren estructurar información tabular atrapada en archivos PDF. <br><br><b>Nota importante:</b> Incluye beneficios que todo aquel que analiza datos debe tener si tu día a día es conciliar bancos, garantizando la privacidad y manejando informacion cofidencial de manera local sin exponer en la web.</b>",
        caracteristicas: ["<p><b>Conversión avanzada a Excel:</b> Es su función más destacada. Permite seleccionar tablas manualmente o usar detección automática para exportar datos limpios a .xlsx o .csv, ajustando filas, columnas y delimitadores antes de convertir.</p>","<p><b>Múltiples formatos de salida:</b> Convierte archivos PDF a Word, PowerPoint, AutoCAD (DWG/DXF), HTML, imágenes y texto plano.</p>", "<p><b>Motor OCR integrado:</b> Reconoce y extrae texto o tablas desde documentos escaneados o imágenes fotográficas en varios idiomas.</p>" , "<p><b>Procesamiento por lotes (Batch):</b> Permite convertir carpetas enteras de archivos PDF de manera simultánea sin intervención manual paso a paso.</p>", "<p><b>Edición y seguridad:</b> Incluye herramientas para modificar texto directamente en el PDF, agregar páginas, crear formularios interactivos, añadir firmas digitales y cifrar con contraseñas.</p>"],
        nota: "Se trata de una aplicación ejecutable (EXE) que ha sido ajustada para mantener siempre la sesión activa y sin limites de tiempo; la aplicación se mantiene a la fecha estable. Se recomienda tener instalado anydesk para conectarnos remotamente y asisitir la instalación y realizar pruebas de funcionabilidad. <br><br><b>Se recomienda no actualizar y mantener la versión inicial.</b> Se recomienda tener unos PDF para realizar pruebas y validar el óptimo funcionamiento de esta versión. <br><br>Precio en USDT $7 mediante Binance.",
        precio: "COP $20.000",
        tipoPago: "Pago único",
        video: "video/pdfextractpro.mp4",
        youtube: "https://youtu.be/Oi_HuA9jlL0",
        fotos: ["img/p14-0.webp", "img/p14-1.webp", "img/p14-2.webp"]
    },
     {
        id: 3,
        nombre: "Consulta Datos NIT (DIAN)",
        url: "consulta-datos-nit.html",
        formato: "Extensión Web .crx",
        mostrarTecnica: true,
etiqueta: "ACTIVA",
        desc: "<b>REF005</b><p>Accede desde Windows y/o macOS y verifica de forma masiva, automática y directamente en el portal DIAN el nombre asociado a los NIT de contribuyente Persona Jurídica ó Persona Natural suscritos, sin procesos manuales ni captchas repetitivos.<p> <br><p>Ideal para temporada de exógena y validación de los formatos que requieran esta auditoría.<p><br><b>Actualizada el 05-01-2026</b>",
        caracteristicas: ["Carga un archivo EXCEL ó pega directamente los Nits (Sin punto ni comas).", "Puedes decidir en consultar CON estado RUT, la cual te anexara si esta: ACTIVO, CANCELADO ó SUSPENDIDO; este proceso valida catpcha y depende si el portal web se encuentre estable.", "Puedes decidir en consultar SIN estado RUT, la cual es más ligero y estable; este proceso solo te indica si está registrado o no en la DIAN mediante el módulo inconsisitencias RUT."],
        nota: "<p>Para brindarle un soporte técnico oportuno, requerimos conectarnos de forma remota a su equipo a través de AnyDesk.<p> <br><p>Tenga en cuenta que este acceso quedará registrado de manera individual en cada computadora durante la instalación. Por su seguridad, nuestro equipo se comunicará exclusivamente al número de móvil ó @usuario que tiene registrado con nosotros.<p> <br><p>Asimismo, le recordamos que el funcionamiento de nuestra herramienta depende de plataformas de terceros integradas; <b>cualquier cambio en los parámetros de dichas plataformas nos exime de responsabilidad sobre la continuidad del servicio.</b><p> <br><b><p>RECUERDE</b> que es importante ver el videotutorial antes de adquirir la herramienta. De esta manera, al finalizar la instalación, le será más fácil resolver cualquier duda que no se haya abordado en el video.</p> <br><p>Le pedimos disponer de unos 15 minutos mientras realizamos la instalación y para las pruebas de funcionalidad tener un listado de nit a consultar. Recuerde que la herramienta no tiene fecha de vencimiento; por ello, nos aseguramos de entregarla probada y funcionando correctamente al momento de su adquisición.</p>",
        precio: "COP $30.000",
        tipoPago: "Pago único",
        video: "video/RUT2026.mp4",
        youtube: "https://www.youtube.com/watch?v=1wLEFzIwj38",
        fotos: ["img/p3-0.webp", "img/p3-1.webp"]
    }, 
     {
        id: 13,
        nombre: "Trámites Digitales (DIAN)",
        url: "tramites-pn.html",
        formato: "Consultoria Contable",
        mostrarTecnica: false,
etiqueta: "DISPONIBLE",
        desc: "<b>REF010</b> Facilitamos la gestión y formalización de tus trámites ante la DIAN, garantizando la actualización de tu RUT, el restablecimiento de contraseñas y la activación de tu firma electrónica para cumplir con tus obligaciones sin complicaciones.",
    caracteristicas: [
        "Descarga copia del RUT solo con #cedula (Persona Natural).",
        "Gestión de contraseña vencida y restablecimiento.",
        "Generación y activación de la Firma Electrónica (Firma Digital) aunque no tengas como acceder al correo registrado ó Móvil.",
        "Actualización integral de datos en el RUT (actividad económica, ubicación y responsabilidades).",
        "Actualización integral de datos en el RUT (telefono y correo).",
        "Acompañamiento paso a paso para evitar errores y validar el trámite con éxito."
    ],
    nota: "El valor del servicio puede variar según el estado de la cuenta en el portal de la DIAN o la cantidad de modificaciones requeridas. <br><br><b>¡Contáctanos para gestionar tu trámite de forma rápida y segura!</b>",
        precio: "COP $60.000",
        video: "",
        fotos: ["img/p13-0.webp", "img/p13-1.webp", "img/p13-2.webp", "img/p13-3.webp", "img/p13-4.webp"]
    },  
     
    {
        id: 12,
        nombre: "Reportes Renta P.N A.G2025 (DIAN)",
        url: "reporte-rentapn.html",
        formato: "Extensión Web .crx",
        mostrarTecnica: true,
        etiqueta: "ACTIVA",
        desc: "<b>REF002</b><p>Accede desde Windows y/o macOS y ahorra tiempo en esta temporada de Renta de Personas Naturales (Año Gravable 2025). Descarga y renombra automáticamente tus listados de facturas electrónicas y exógena sugerida para una validación rápida, precisa y sin esfuerzo de reportes desde periodos 2013 a 2025.<p> <br><p>Además, puedes iniciar el aplicativo y elegir las 3 opciones de descarga, mientras estas en la sesión del contribuyente.<p><br><b>Actualizada el 21-07-2026</b>",
        caracteristicas: ["Inicia sesión del contribuyente.", "Puedes descargar masivamente reportes de exógena sugerida.", "Puedes descargar masivamente reportes factura electrónica y sus PDF's.", "Puedes descargar masivamente formularios 110/210 presentados.","Analizador tributario de exógena", "Esta herramienta es de apoyo para la temporada Agto a Oct 2026."],
        nota: "<p>Para brindarle un soporte técnico oportuno, requerimos conectarnos de forma remota a su equipo a través de AnyDesk.<p> <br><p>Tenga en cuenta que este acceso quedará registrado de manera individual en cada computadora durante la instalación. Por su seguridad, nuestro equipo se comunicará exclusivamente al número de móvil ó @usuario que tiene registrado con nosotros.<p> <br><p>Asimismo, le recordamos que el funcionamiento de nuestra herramienta depende de plataformas de terceros integradas; <b>cualquier cambio en los parámetros de dichas plataformas nos exime de responsabilidad sobre la continuidad del servicio.</b><p> <br><b><p>RECUERDE</b> que es importante ver el videotutorial antes de adquirir la herramienta. De esta manera, al finalizar la instalación, le será más fácil resolver cualquier duda que no se haya abordado en el video.</p> <br><p>Le pedimos disponer de unos 15 minutos mientras realizamos la instalación y para las pruebas de funcionalidad ingresar aun perfil de contribuyente. Recuerde que la herramienta no tiene fecha de vencimiento; por ello, nos aseguramos de entregarla probada y funcionando correctamente al momento de su adquisición.</p>",
        precio: "COP $20.000",
        tipoPago: "Pago único",
        video: "video/ReportePN.mp4",
        youtube: "https://youtu.be/qa_wJjN3Nvo",
        fotos: ["img/p12-0.webp", "img/p12-1.webp", "img/p12-2.webp", "img/p12-3.webp"]
    },    
 {
        id: 4,
        nombre: "Microsoft 365 Genuina (1 año)",
        url: "365-office.html",
        formato: "Credenciales",
        mostrarTecnica: false,
etiqueta: "DISPONIBLE",
        desc: "<b>REF004</b><p>Activa tu suite de Office de forma segura en Windows y/o MacOS mediante credenciales corporativas y olvídate de parches o cracks que ponen en riesgo la seguridad de tu PC. <br><br><b>Nota importante:</b> Tu cuenta incluye beneficios adicionales como almacenamiento en la nube. Te sugerimos usar este espacio únicamente para archivos no críticos o temporales. <br><br>El objetivo principal de esta credencial, y donde su efectividad está garantizada al 100 %, es para la activación y uso de Office en su versión de escritorio.<p><b> </b>",
        caracteristicas: ["Activación en hasta 5 dispositivos.", "Compatible con PC / MacOS / Android / iOS.", "Word, Excel, y PowerPoint, entre otros..", "No incluye Copilot ni complementos en la suite."],
        nota: "Se entrega un correo corporativo con una clave temporal. El usuario es responsable de asignar su propia clave personalizada. La credencial tiene un costo de pago único. <br><br>En caso de pérdida de la clave creada por el usuario, no será posible recuperar el acceso, <b>se brinda apoyo para la instalación de manera remota mediante AnyDesk.</b> <br><br><b>Recuerde:</b> guardar la contraseña que asignó para su respectiva garantía de 1 año, para uso de Word, Excel y PowerPoint. <br><br>Precio en USDT $10 mediante Binance.",
        precio: "COP $25.000",
        tipoPago: "Pago único",
        video: "video/365.mp4",
        youtube: "https://youtu.be/jKVPmmDu1-I",
        fotos: ["img/p4-0.webp", "img/p4-1.webp", "img/p4-2.webp"]
    },
 {
        id: 8,
        nombre: "Windows 10/11 PRO (Vitalicia)",
        url: "windows-10-11.html",
        formato: "Credenciales",
        mostrarTecnica: false,
etiqueta: "DISPONIBLE",
        desc: "<b>REF000</b><p>Activa de forma segura con credenciales corporativas y evita el uso de parches o cracks que comprometen la seguridad de tu PC.<p><b> </b>",
        caracteristicas: ["Ingresa la clave digital asignada y listo."],
        nota: "Se entrega la clave al usuario final, quien es responsable de su buen uso. La clave permanece operativa de manera indefinida, garantizando acceso continuo y seguridad en todo momento. <b>único pago.</b> se brinda apoyo para la instalación de manera remota mediante AnyDesk. <br><br>Precio en USDT $7 mediante Binance.",
        precio: "COP $20.000",
        tipoPago: "Pago único",
        video: "",
        fotos: ["img/p8-0.webp", "img/p8-1.webp"]
    },
  {
        id: 9,
        nombre: "Anydesk V.6.0 (Vitalicia)",
        url: "anydesk-v6.html",
        formato: "Ejecutable .exe",
        mostrarTecnica: false,
etiqueta: "DISPONIBLE",
        desc: "<b>REF008</b>El software de escritorio remoto de alto rendimiento que permite compartir el escritorio sin latencia, un control remoto estable y una transmisión de datos rápida y segura entre dispositivos.<p><b> </b><p>",
        caracteristicas: ["Vea y controle la pantalla de otro dispositivo.", "No requiere licencia y puedes usarlo incluso si formateas tu PC en el futuro."],
        nota: "Se trata de una aplicación ejecutable (EXE) que ha sido ajustada para mantener siempre la sesión activa y sin limites de tiempo; la aplicación se mantiene operativa de forma indefinida. <br><br><b>Se recomienda no actualizar y mantener la versión inicial.</b> En caso que el usuario tenga alguna versión instalada anteriormente se recomienda limpiar los registros mediante regedit para el óptimo funcionamiento de esta versión. <br><br>Precio en USDT $7 mediante Binance.",
        precio: "COP $20.000",
        tipoPago: "Pago único",
        video: "",
        fotos: ["img/p9-0.webp", "img/p9-1.webp"]
    },

         
         
     {
        id: 15,
        nombre: "Duolingo Super (1 AÑO)",
        url: "duolingosuper.html",
        formato: "Credenciales",
        mostrarTecnica: false,
etiqueta: "DISPONIBLE",
        desc: "<p>¡Domina un nuevo idioma de la forma más rápida y divertida durante 1 año completo! Disfruta de la experiencia de aprendizaje definitiva sin interrupciones, sin límites de vidas y con todas las herramientas premium activadas. <br><br><b>Nota importante:</b> Se activa en tu propia cuenta; tener navegador WEB Brave para conectar VPN India y realizar el canje del cupón.</b>",
        caracteristicas: ["<p><b>🚫 Cero Anuncios:</b> Aprende sin interrupciones molestas ni pausas publicitarias.</p>","<p><b>❤️ Vidas Ilimitadas:</b> Equivócate las veces que sea necesario sin perder tu progreso ni tener que esperar para volver a practicar.</p>", "<p><b>🎯 Práctica Personalizada:</b> Accede a sesiones especiales para repasar y corregir tus errores.</p>" , "<p><b>⚡ Saltos de Nivel Ilimitados:</b> Realiza los exámenes de salto de sección directamente y avanza a tu propio ritmo.</p>", "<p><b>📊 Seguimiento de Progreso:</b> Mide tu rendimiento con métricas avanzadas e insignias exclusivas.</p>", "<p><b>💻 Compatibilidad Multiplataforma:</b> PC, Mac, Móviles, Tablets (iOS/Windows).</p>"],
        nota: "Te en cuenta las siguientes recomendaciones: <b>El enlace es de un solo uso.</b> Se recomienda canjearlo únicamente en la sesión iniciada donde deseas disfrutar el beneficio; Una vez activado correctamente, el servicio quedará asociado a tu cuenta. <br><br><p><b>Te realizamos acompañamiento vía Anydesk, para ello tenerlo instalado para poder proceder y para validar una correcta activación, es importante que estes en un PC, no es válido ni en Tablet, ni celular para el acompañamiento.</b></p> <br><p>Manejamos pago local COP y Binance USDT.</p> <br><p><b>Tener en cuenta que se brinda garantía si se procede asistir vía anydesk, de lo contrario no hay garantía.</b> Precio en USDT $10 mediante Binance.<p/>",
        precio: "COP $15.000",
        tipoPago: "Pago único",
        video: "video/superduo.mp4",
        youtube: "https://youtu.be/JDlt_Eu4lrQ",
        fotos: ["img/p15-0.webp", "img/p15-1.webp", "img/p15-2.webp", "img/p15-3.webp"]
    },   
         
{
        id: 10,
        nombre: "Plataformas/Membresías",
        url: "plataforma-membresias.html",
        formato: "Credenciales",
        mostrarTecnica: false,
etiqueta: "DISPONIBLE",
        desc: "Te invitamos a visualizar nuestro catalogo de ocio, producción y entretenimiento con los mejores precios del mercado.<p><b> </b><p>",
        caracteristicas: ["Plataformas Streaming.", "Antivirus.", "IA.", "VPN.", "Diseño.", "Cursos.", "Juegos"],
        nota: "(En ver videotutorial encontrarás lista de precios y plataformas) Las membresias son en la mayoria mensuales y otras con oferta de hasta 3 y 12 meses. <b>Escribenos y podemos ampliar la información de interes.</b>",
        precio: "Desde COP $1.500",
        video: "https://acortar.link/Plataformax",
        fotos: ["img/p10-0.webp"]
    },
{
        id: 11,
        nombre: "Declaración de Renta Persona Natural (DIAN)",
        url: "declaracion-renta-pn.html",
        formato: "Consultoria Contable",
        mostrarTecnica: false,
etiqueta: "AGOTADO",
        desc: "<b>REF011</b> Brindamos asesoría integral en la elaboración y presentación de tu Declaración de Renta Persona Natural. Garantizamos total cumplimiento normativo y una optimización fiscal estratégica, tanto en el Formulario 210 como en el Formulario 110.",
        caracteristicas: ["Diagnóstico inicial de requisitos según topes de la DIAN.", "Análisis de deducciones y beneficios tributarios para pagar lo justo.", "Elaboración del borrador y presentación de formulario 110/210.", "Acompañamiento en el proceso de pago y firma electrónica.", "Entrega de informe detallado de la declaración presentada."],
        nota: "El valor del servicio puede variar según la complejidad de la realidad financiera del contribuyente (cantidad de cruce cedular, inversiones, etc.). <br><br><b>¡Contáctanos para una cotización personalizada!</b>",
        precio: "Desde COP $300.000",
        video: "",
        fotos: ["img/p11-0.webp", "img/p11-1.webp", "img/p11-2.webp", "img/p11-3.webp", "img/p11-4.webp"]
    }


];


