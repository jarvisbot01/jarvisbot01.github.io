const techUrls = {
  'AWS': 'https://aws.amazon.com/',
  'Linux': 'https://www.kernel.org/',
  'Nginx': 'https://nginx.org/',
  'Docker': 'https://www.docker.com/',
  'Kubernetes': 'https://kubernetes.io/',
  'GitHub Actions': 'https://github.com/features/actions/',
  'Debian': 'https://www.debian.org/',
  'Ubuntu': 'https://ubuntu.com/',
  'Kali Linux': 'https://www.kali.org/',
  'C#': 'https://learn.microsoft.com/es-es/dotnet/csharp/',
  'Git': 'https://git-scm.com/',
  'Android': 'https://www.android.com/',
  'Fedora': 'https://fedoraproject.org/',
  'Red Hat': 'https://www.redhat.com/es/',
  'AlmaLinux': 'https://almalinux.org/',
  'Rocky Linux': 'https://rockylinux.org/',
  'Grafana': 'https://grafana.com/',
  'Prometheus': 'https://prometheus.io/',
  'Helm': 'https://helm.sh/',
  'Arch Linux': 'https://archlinux.org/',
  '.NET': 'https://dotnet.microsoft.com/es-es/',
  'Python': 'https://www.python.org/',
  'Visual Studio Code': 'https://code.visualstudio.com/',
  'WordPress': 'https://wordpress.org/',
  'Bash': 'https://www.gnu.org/software/bash/',
  'SSH': 'https://www.openssh.com/',
  'MySQL': 'https://www.mysql.com/',
  'MariaDB': 'https://mariadb.org/es',
  'Cloudflare': 'https://www.cloudflare.com/es-es/',
  'Digital Ocean': 'https://www.digitalocean.com/',
  'HTML5': 'https://developer.mozilla.org/es/docs/Web/HTML',
  'CSS3': 'https://developer.mozilla.org/es/docs/Web/CSS',
  'YAML': 'https://yaml.org/',
  'Canva': 'https://www.canva.com/',
  'cPanel': 'https://cpanel.net/',
  'Devicon': 'https://devicon.dev/',
  'Trello': 'https://trello.com/',
  'Weblate': 'https://weblate.org/',
  'GCC': 'https://gcc.gnu.org/',
  'Codespaces': 'https://github.com/features/codespaces',
  'Homebrew': 'https://brew.sh/',
  'Hoppscotch': 'https://hoppscotch.io/',
  'Portainer': 'https://www.portainer.io/',

  'Azure': 'https://azure.microsohttps://azure.microsoft.com/es-es/',
  'Google Cloud': 'https://cloud.google.com/',
  'Java': 'https://www.java.com/es',
  'Node.js': 'https://nodejs.org/es/',
  'Oracle': 'https://www.oracle.com/es',
  'Ansible': 'https://www.ansible.com/',
  'Terraform': 'https://www.terraform.io/',
  'Argo CD': 'https://argoproj.github.io/cd/',
  'Traefik': 'https://traefik.io/traefik/',
  'GitLab': 'https://about.gitlab.com/es/',
  'PostgreSQL': 'https://www.postgresql.org/',
  'Proxmox': 'https://www.proxmox.com/en/',
  'K3s': 'https://k3s.io/',
  'MongoDB': 'https://www.mongodb.com/es/',
  'Envoy': 'https://www.envoyproxy.io/',
  'Bitbucket': 'https://bitbucket.org/',
  'Bē': 'https://www.behance.net/',
  'Entity Framework (EF) Core': 'https://learn.microsoft.com/es-es/ef/core/',
  'Figma': 'https://www.figma.com/es-la/',
  'Inkscape': 'https://inkscape.org/',
  'Slack': 'https://slack.com/',
  'WireGuard': 'https://www.wireguard.com/',
  'Istio': 'https://istio.io/',

  'Redis': 'https://redis.io/es/',
  'JS': 'https://developer.mozilla.org/es/docs/Web/JavaScript',
  'npm': 'https://www.npmjs.com/',
  'pnpm': 'https://pnpm.io/',
  'PowerShell': 'https://learn.microsoft.com/es-es/powershell/',
  'Markdown': 'https://daringfireball.net/projects/markdown/',
  'Podman': 'https://podman.io/',
  'influxDB': 'https://www.influxdata.com/',
  'ESLint': 'https://eslint.org/',
  'Express': 'https://expressjs.com/',
  'Raspberry Pi': 'https://www.raspberrypi.org/',

  'C++': 'https://isocpp.org/',
  'Cmake': 'https://cmake.org/',
  'Microsoft SQL Server': 'https://www.microsoft.com/es-es/sql-server/',
  'Neovim': 'https://neovim.io/'
};

const techDescriptions = {
  'AWS': 'Amazon Web Services ofrece un conjunto de servicios globales de computación, almacenamiento, bases de datos, análisis e implementación que ayudan a las organizaciones a moverse con mayor rapidez, reducir costos de TI y escalar.',
  'Linux': 'Linux es un sistema operativo de código abierto basado en Unix, creado por Linus Torvalds. Es conocido por su estabilidad, seguridad y flexibilidad, siendo la base de numerosos servidores, supercomputadoras y dispositivos embebidos.',
  'Nginx': 'NGINX es un servidor web de alto rendimiento, balanceador de carga y proxy inverso diseñado para usar pocos recursos y alta concurrencia. Es particularmente efectivo para servir contenido estático y manejar múltiples conexiones simultáneas.',
  'Docker': 'Docker es una plataforma de contenedorización que permite a los desarrolladores empaquetar aplicaciones con todas sus dependencias en un contenedor estandarizado para el desarrollo de software, que puede ejecutarse en cualquier entorno.',
  'Kubernetes': 'Kubernetes es un sistema de orquestación de contenedores de código abierto para automatizar la implementación, el escalado y la gestión de aplicaciones en contenedores. Agrupa los contenedores que conforman una aplicación en unidades lógicas para facilitar la gestión.',
  'GitHub Actions': 'GitHub Actions es un servicio de integración continua y entrega continua (CI/CD) que permite automatizar la construcción, prueba y despliegue de proyectos en GitHub. Permite crear flujos de trabajo personalizados para el ciclo de vida de desarrollo.',
  'Debian': 'Debian es un sistema operativo Linux comunitario compuesto enteramente de software libre. Es conocido por su estabilidad, su adhesión a los principios del software libre y su amplio repositorio de paquetes.',
  'Ubuntu': 'Ubuntu es una distribución Linux basada en Debian, centrada en la facilidad de uso y la accesibilidad. Ofrece versiones para escritorio, servidor y dispositivos IoT, con actualizaciones regulares y soporte a largo plazo.',
  'Kali Linux': 'Kali Linux es una distribución de Linux basada en Debian diseñada para la auditoría de seguridad y pruebas de penetración.',
  'C#': 'C# es un lenguaje de programación moderno, orientado a objetos y de tipo seguro desarrollado por Microsoft. Es parte de la plataforma .NET y se utiliza para crear aplicaciones de escritorio, web y móviles.',
  'Git': 'Git es un sistema de control de versiones distribuido diseñado para manejar proyectos desde pequeños hasta muy grandes con velocidad y eficiencia. Permite a múltiples desarrolladores trabajar en paralelo sin crear conflictos en el código fuente.',
  'Android': 'Android es un sistema operativo móvil basado en Linux, desarrollado por Google. Es la plataforma móvil más popular del mundo, que potencia miles de millones de dispositivos, desde teléfonos y relojes hasta automóviles y televisores.',
  'Fedora': 'Fedora es una distribución de Linux desarrollada por el Proyecto Fedora, patrocinado por la comunidad y propiedad de Red Hat.',
  'Red Hat': 'Red Hat Enterprise Linux es una distribución Linux desarrollada por Red Hat para el mercado empresarial. Ofrece estabilidad, seguridad y soporte a largo plazo, siendo ampliamente adoptada en entornos corporativos críticos.',
  'AlmaLinux': 'AlmaLinux es una distribución de Linux gratuita y de código abierto, compatible binaria 1:1 con Red Hat Enterprise Linux, desarrollada por la comunidad.',
  'Rocky Linux': 'Rocky Linux es una distribución de Linux comunitaria diseñada para ser 100% compatible con Red Hat Enterprise Linux.',
  'Grafana': 'Grafana es una plataforma de análisis y visualización de métricas de código abierto. Permite consultar, visualizar, alertar y entender las métricas independientemente de dónde estén almacenadas, facilitando la observabilidad.',
  'Prometheus': 'Prometheus es un sistema de monitorización y alerta de código abierto, originalmente desarrollado por SoundCloud. Se enfoca en la confiabilidad y está diseñado para recopilar métricas en tiempo real a través de un modelo de extracción.',
  'Helm': 'Helm es un gestor de paquetes para Kubernetes que ayuda a gestionar aplicaciones de Kubernetes.',
  'Arch Linux': 'Arch Linux es una distribución Linux ligera y flexible siguiendo el principio KISS (Keep It Simple, Stupid). Ofrece un sistema minimalista como base que los usuarios pueden expandir según sus necesidades específicas.',
  '.NET': '.NET es una plataforma de desarrollo multiplataforma, de código abierto y gratuita creada por Microsoft para construir diversas aplicaciones, incluyendo web, móviles, de escritorio, juegos y IoT.',
  'Python': 'Python es un lenguaje de programación interpretado, de alto nivel y propósito general. Su filosofía de diseño enfatiza la legibilidad del código con su notable uso de espacios en blanco significativos y sintaxis simple.',
  'Visual Studio Code': 'Visual Studio Code es un editor de código fuente desarrollado por Microsoft. Incluye soporte para depuración, control de Git integrado, resaltado de sintaxis, finalización inteligente de código y refactorización.',
  'WordPress': 'WordPress es un sistema de gestión de contenidos (CMS) de código abierto utilizado para crear sitios web, blogs o aplicaciones. WordPress es la plataforma de blogs más popular y potencia aproximadamente el 43% de todos los sitios web en Internet.',
  'Bash': 'Bash (Bourne Again SHell) es un intérprete de comandos y lenguaje de scripting, siendo el shell predeterminado en la mayoría de sistemas Linux y macOS. Permite automatizar tareas mediante scripts y ejecutar comandos en un entorno interactivo.',
  'SSH': 'SSH (Secure Shell) es un protocolo de red criptográfico para servicios de red seguros sobre una red no segura. Comúnmente se usa para acceso remoto a sistemas y transferencia segura de archivos.',
  'MySQL': 'MySQL es un sistema de gestión de bases de datos relacional de código abierto. Es ideal para aplicaciones web y es utilizado por muchos sitios web populares, incluyendo Facebook, Twitter y YouTube.',
  'MariaDB': 'MariaDB es un sistema de gestión de bases de datos relacional de código abierto, fork de MySQL. Está diseñado para ser altamente compatible con MySQL mientras ofrece nuevas funcionalidades, mejor rendimiento y mayor transparencia.',
  'Cloudflare': 'Cloudflare es una red de entrega de contenido (CDN), servicio de mitigación de DDoS, seguridad de Internet y servicios distribuidos de DNS. Su plataforma sitúa servidores entre visitantes del sitio web y el hosting, actuando como firewall y acelerador web.',
  'Digital Ocean': 'DigitalOcean es un proveedor de infraestructura cloud que ofrece servicios que ayudan a desarrolladores a implementar y escalar aplicaciones que se ejecutan simultáneamente en múltiples computadoras.',
  'HTML5': 'HTML5 es la quinta revisión del lenguaje de marcado HTML, utilizado para estructurar y presentar contenido en la Web. Incluye nuevos elementos, atributos y comportamientos, así como un conjunto más amplio de tecnologías.',
  'CSS3': 'CSS3 es la última evolución del lenguaje de hojas de estilo en cascada que extiende CSS2.1. Trae nuevas características como bordes redondeados, sombras, gradientes, transiciones y animaciones, así como nuevos layouts como flexbox y grid.',
  'YAML': 'YAML (YAML Ain\'t Markup Language) es un lenguaje de serialización de datos legible por humanos, comúnmente utilizado para archivos de configuración. Es especialmente popular en aplicaciones donde los datos se almacenan o transmiten.',
  'Canva': 'Canva es una plataforma de diseño gráfico que permite a los usuarios crear gráficos para redes sociales, presentaciones, carteles y otro contenido visual.',
  'cPanel': 'cPanel es un panel de control de alojamiento web que proporciona una interfaz gráfica y herramientas de automatización diseñadas para simplificar el proceso de alojamiento de un sitio web.',
  'Devicon': 'Devicon es un conjunto de iconos que representan lenguajes de programación, diseño y otras tecnologías de desarrollo.',
  'Trello': 'Trello es una aplicación de gestión de proyectos de tipo kanban que permite a los equipos organizar sus tareas.',
  'Weblate': 'Weblate es una herramienta de traducción continua con una estrecha integración con el control de versiones.',
  'GCC': 'GCC (GNU Compiler Collection) es un sistema de compiladores optimizadores producido por el Proyecto GNU que admite varios lenguiales de programación.',
  'Codespaces': 'GitHub Codespaces ofrece un entorno de desarrollo completo en la nube para codificar, construir, probar y depurar.',
  'Homebrew': 'Homebrew es un sistema de gestión de paquetes de software libre que simplifica la instalación de software en macOS de Apple y Linux.',
  'Hoppscotch': 'Hoppscotch es un ecosistema de API de código abierto que ayuda a los desarrolladores a crear, probar y documentar APIs.',
  'Portainer': 'Portainer es una herramienta de gestión de contenedores ligera que proporciona una interfaz de usuario para gestionar entornos de contenedores Docker y Kubernetes.',

  'Azure': 'Microsoft Azure es una plataforma de computación en la nube creada por Microsoft para construir, probar, desplegar y administrar aplicaciones y servicios a través de centros de datos gestionados por Microsoft.',
  'Google Cloud': 'Google Cloud Platform (GCP) ofrece servicios de computación en la nube que se ejecutan en la misma infraestructura que utiliza Google para sus productos de usuario final como Google Search y YouTube.',
  'Java': 'Java es un lenguaje de programación y plataforma informática comercializada por primera vez en 1995 por Sun Microsystems. Es rápido, seguro y fiable, y está diseñado para permitir el desarrollo de aplicaciones portátiles de alto rendimiento.',
  'Node.js': 'Node.js es un entorno de ejecución para JavaScript construido con el motor V8 de Chrome. Permite ejecutar código JavaScript en el servidor, utilizando un modelo de E/S sin bloqueo y orientado a eventos que lo hace ligero y eficiente.',
  'Oracle': 'Oracle Database es un sistema de gestión de base de datos relacional desarrollado por Oracle Corporation. Es uno de los sistemas de bases de datos más confiables y ampliamente utilizados para aplicaciones empresariales.',
  'Ansible': 'Ansible es una plataforma de software de código abierto para la configuración y gestión de sistemas, despliegue de software y orquestación de tareas más avanzadas como implementaciones continuas o actualizaciones sin tiempo de inactividad.',
  'Terraform': 'Terraform es una herramienta de infraestructura como código (IaC) de código abierto que permite a los usuarios definir y aprovisionar la infraestructura del centro de datos con un lenguaje de configuración declarativo.',
  'Argo CD': 'Argo CD es una herramienta de entrega continua declarativa para Kubernetes, que sigue el enfoque de GitOps.',
  'Traefik': 'Traefik es un proxy inverso y balanceador de carga de código abierto para microservicios. Simplitica la gestión de la red integrándose con componentes de infraestructura existentes y configurándose automáticamente.',
  'GitLab': 'GitLab es una plataforma completa de DevOps que incluye un gestor de repositorios Git, CI/CD, seguridad, gestión de proyectos y más. Permite a los equipos colaborar y entregar software de manera más eficiente.',
  'PostgreSQL': 'PostgreSQL es un sistema de gestión de bases de datos relacional orientado a objetos y de código abierto. Enfatiza la extensibilidad y el cumplimiento de estándares, ofreciendo características avanzadas como soporte para JSON y replicación.',
  'Proxmox': 'Proxmox Virtual Environment es una plataforma de virtualización de servidores de código abierto.',
  'K3s': 'K3s es una distribución ligera de Kubernetes certificada, producida por Rancher Labs. Está optimizada para dispositivos con recursos limitados, ideal para edge computing, IoT y desarrollo local.',
  'MongoDB': 'MongoDB es una base de datos NoSQL orientada a documentos. En lugar de utilizar tablas y filas como en bases de datos relacionales, MongoDB utiliza colecciones y documentos con estructuras de datos flexibles, permitiendo la evolución de los datos con el tiempo.',
  'Envoy': 'Envoy es un proxy de servicio de código abierto, diseñado originalmente en Lyft. Está diseñado para la nube nativa, con funciones avanzadas para balanceo de carga, enrutamiento y observabilidad.',
  'Bitbucket': 'Bitbucket es un servicio de alojamiento de repositorios Git y Mercurial que permite a los equipos colaborar en el código.',
  'Bē': 'Behance es una plataforma online para mostrar y descubrir trabajos creativos.',
  'Entity Framework (EF) Core': 'Entity Framework Core es un mapeador de objetos-relacional (O/RM) de código abierto y ligero para .NET.',
  'Figma': 'Figma es una herramienta de diseño de interfaces basada en la nube que permite a los equipos colaborar en tiempo real.',
  'Inkscape': 'Inkscape es un editor de gráficos vectoriales de código abierto, similar a Adobe Illustrator.',
  'Slack': 'Slack es una plataforma de mensajería empresarial que permite a los equipos comunicarse y colaborar de manera organizada a través de canales, mensajes directos y integraciones con herramientas de trabajo.',
  'WireGuard': 'WireGuard es una VPN extremadamente simple pero rápida y moderna que utiliza criptografía de última generación.',
  'Istio': 'Istio es una malla de servicios de código abierto que se integra de forma transparente en las aplicaciones distribuidas existentes.',

  'Redis': 'Redis es un almacén de estructura de datos en memoria, utilizado como base de datos, caché y broker de mensajes. Soporta estructuras de datos como cadenas, hashes, listas, conjuntos y más, con durabilidad opcional.',
  'JS': 'JavaScript es un lenguaje de programación interpretado, de alto nivel, que cumple con la especificación ECMAScript. Es uno de los pilares de la web moderna, permitiendo páginas web interactivas y aplicaciones dinámicas.',
  'npm': 'npm (Node Package Manager) es el sistema de gestión de paquetes por defecto para Node.js. Consiste en un cliente de línea de comandos y un registro online de paquetes públicos y privados.',
  'pnpm': 'pnpm es un gestor de paquetes rápido y eficiente en el uso del espacio en disco para Node.js.',
  'PowerShell': 'PowerShell es un marco de automatización de tareas y gestión de configuración de Microsoft, que consiste en un shell de línea de comandos y un lenguaje de scripting. Está construido sobre .NET y proporciona integración completa con tecnologías Microsoft.',
  'Markdown': 'Markdown es un lenguaje de marcado ligero creado por John Gruber con la ayuda de Aaron Swartz. Permite escribir usando texto plano fácil de leer y escribir, que luego se convierte a HTML estructuralmente válido.',
  'Podman': 'Podman es un motor de contenedores sin demonio para desarrollar, gestionar y ejecutar contenedores OCI en tus sistemas Linux.',
  'influxDB': 'InfluxDB es una base de datos de series temporales de código abierto desarrollada por InfluxData.',
  'ESLint': 'ESLint es una herramienta de linting de código estático para identificar y reportar patrones problemáticos encontrados en el código JavaScript.',
  'Express': 'Express es un marco de aplicación web para Node.js, diseñado para construir aplicaciones web y APIs.',
  'Raspberry Pi': 'Raspberry Pi es una serie de pequeñas computadoras de una sola placa desarrolladas en el Reino Unido por la Fundación Raspberry Pi para promover la enseñanza de la informática básica en las escuelas y en los países en desarrollo.',

  'C++': 'C++ es un lenguaje de programación de propósito general creado como una extensión del lenguaje C. Añade mecanismos que permiten la manipulación de objetos, siendo ampliamente utilizado en sistemas embebidos, controladores, aplicaciones de escritorio y juegos.',
  'Cmake': 'CMake es una herramienta de software de código abierto y multiplataforma para gestionar el proceso de compilación de software utilizando un método independiente del compilador.',
  'Microsoft SQL Server': 'Microsoft SQL Server es un sistema de gestión de bases de datos relacionales desarrollado por Microsoft. Proporciona funcionalidades avanzadas de análisis, seguridad, y soporte para aplicaciones empresariales con alto rendimiento.',
  'Neovim': 'Neovim es una refactorización extensible del editor de texto Vim. Busca mejorar la experiencia del usuario mientras mantiene la compatibilidad con los flujos de trabajo y plugins existentes de Vim, añadiendo interfaces modernas y extensibilidad a través de lenguajes modernos.'
};

let cardContainer = null;
let cardContent = null;
let cardTitle = null;
let cardIcon = null;
let cardDescription = null;
let closeButton = null;

document.addEventListener('DOMContentLoaded', function () {

  loadSavedTheme();
  createTechCard();

  const techNames = document.querySelectorAll('.tech-item span');
  techNames.forEach(span => {
    span.addEventListener('click', handleTechClick);
  });

  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', toggleTheme);

  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
});

function createTechCard() {
  cardContainer = document.createElement('div');
  cardContainer.className = 'tech-card-container';
  cardContainer.style.display = 'none';

  cardContent = document.createElement('div');
  cardContent.className = 'tech-card-content';

  cardTitle = document.createElement('a');
  cardTitle.className = 'tech-card-title';
  cardTitle.target = '_blank';
  cardTitle.rel = 'noopener noreferrer';

  cardIcon = document.createElement('img');
  cardIcon.className = 'tech-card-icon';

  cardDescription = document.createElement('p');
  cardDescription.className = 'tech-card-description';

  closeButton = document.createElement('button');
  closeButton.className = 'tech-card-close';
  closeButton.innerHTML = '<span class="material-icons-round">close</span>';
  closeButton.addEventListener('click', closeCard);

  cardContent.appendChild(closeButton);
  cardContent.appendChild(cardIcon);
  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardDescription);
  cardContainer.appendChild(cardContent);

  cardContainer.addEventListener('click', function (event) {
    if (event.target === cardContainer) {
      closeCard();
    }
  });

  document.body.appendChild(cardContainer);
}

function handleTechClick(event) {
  const techName = event.target.textContent.trim();
  const techDescription = techDescriptions[techName] || 'Descripción no disponible.';
  const techUrl = techUrls[techName] || '#';

  const techItem = event.target.closest('.tech-item');
  const iconSrc = techItem.querySelector('img')?.src || '';

  cardTitle.textContent = techName;
  cardTitle.href = techUrl;
  cardIcon.src = iconSrc;
  cardIcon.alt = techName;
  cardDescription.textContent = techDescription;

  cardContainer.style.display = 'flex';
  setTimeout(() => {
    cardContainer.classList.add('visible');
    cardContent.classList.add('visible');
  }, 10);
}

function closeCard(event) {
  if (event && event.currentTarget === closeButton) {
    closeButton.classList.add('animate-close');

    setTimeout(() => {
      cardContainer.classList.remove('visible');
      cardContent.classList.remove('visible');

      setTimeout(() => {
        cardContainer.style.display = 'none';
        closeButton.classList.remove('animate-close');
      }, 300);
    }, 200);
  } else {
    cardContainer.classList.remove('visible');
    cardContent.classList.remove('visible');

    setTimeout(() => {
      cardContainer.style.display = 'none';
    }, 300);
  }
}

function toggleTheme() {
  const body = document.body;
  const isDarkTheme = body.classList.contains('dark-theme');
  const themeIcon = document.querySelector('#themeToggle .material-icons-round');

  if (isDarkTheme) {
    body.classList.remove('dark-theme');
    themeIcon.textContent = 'dark_mode';
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('dark-theme');
    themeIcon.textContent = 'light_mode';
    localStorage.setItem('theme', 'dark');
  }
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  const themeIcon = document.querySelector('#themeToggle .material-icons-round');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.textContent = 'light_mode';
  } else {
    document.body.classList.remove('dark-theme');
    themeIcon.textContent = 'dark_mode';
  }
}
