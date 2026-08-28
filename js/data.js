// Datos de la Biblioteca digital sobre UX para tecnologías emergentes — Unidad didáctica 6 (Tecnologías Emergentes).
// Campos disponibles por recurso: ver plantilla TEUX_UD5.
const RESOURCES = [
  {
    id: 1,
    name: "Making Software Without Having Learned to Program | Nicolás Bronzina",
    nameSpanish: "Making Software Without Having Learned to Program | Nicolás Bronzina",
    section: "Los casos del apunte en detalle",
    materialType: "Artículo",
    yearContext: "Nicolás Bronzina publicó este material en 2026 como reflexión sobre el desarrollo de software desde la perspectiva del personal software.",
    language: "Inglés",
    relevance: "Este artículo desarrolla la idea de que la definición de los objetivos, las decisiones de diseño y el criterio profesional continúan siendo responsabilidad del diseñador, aunque la IA permita delegar la sintaxis y parte de la implementación técnica. A partir de su experiencia en el ámbito del personal software, el autor reivindica el papel de quienes crean soluciones digitales sin una formación específica en ingeniería informática y reflexiona sobre los límites entre aquello que puede automatizarse y aquello que exige juicio humano. Es una lectura relevante porque sintetiza el enfoque de la asignatura y es una base útil para elaborar tu reflexión final.",
    link: "https://medium.com/personal-software"
  },
  {
    id: 2,
    name: "Software Gets Personal | Fabien Girardin y Lisa Gansky",
    nameSpanish: "Software Gets Personal | Fabien Girardin y Lisa Gansky",
    section: "Los casos del apunte en detalle",
    materialType: "Serie de artículos",
    yearContext: "Este conjunto de artículos fue publicado en 2026 como una serie dedicada al concepto de personal software y a su impacto en personas y organizaciones.",
    language: "Inglés",
    relevance: "Esta serie es una referencia útil para comprender el concepto de personal software. Los autores presentan el origen de esta nueva forma de desarrollar software, analizan cómo la IA está transformando las organizaciones y describen la aparición de nuevos perfiles profesionales vinculados a este cambio de paradigma. Ofrecen una visión amplia de la evolución del desarrollo de software y permiten comprender el papel que desempeñan los diseñadores en este nuevo contexto tecnológico.",
    links: [
      { label: "Ver introducción", url: "https://medium.com/personal-software/software-gets-personal-an-introduction-1175c7f1edbd" },
      { label: "Ver para organizaciones y equipos", url: "https://medium.com/personal-software/software-gets-personal-for-organizations-and-teams-2706b7f3bd22" },
      { label: "Ver the makers", url: "https://medium.com/personal-software/software-gets-personal-the-makers-0857cd4633af" }
    ]
  },
  {
    id: 3,
    name: "Entrenar criaturas que no entiendo | Nicolás Bronzina",
    nameSpanish: "Entrenar criaturas que no entiendo | Nicolás Bronzina",
    titleEs: true,
    section: "Los casos del apunte en detalle",
    materialType: "Artículo",
    yearContext: "Nicolás Bronzina publicó este material en 2026 como reflexión sobre el desarrollo responsable de software basado en IA.",
    language: "Español",
    relevance: "Este artículo complementa las ideas desarrolladas en Making Software Without Having Learned to Program y plantea una reflexión sobre la responsabilidad que acompaña a la creación de sistemas basados en IA. Sostiene que la reducción de las barreras técnicas para desarrollar software vuelve todavía más importante el criterio profesional a la hora de decidir qué soluciones merecen la pena construir. Es una lectura que invita a valorar críticamente el propósito y la utilidad de los proyectos más allá de su viabilidad técnica.",
    link: "https://medium.com/@nbronzina/entrenar-criaturas-que-no-entiendo-3665b065ca80"
  },
  {
    id: 4,
    name: "Enseñando Inteligencia Artificial a Diseñadores UX | Nicolás Bronzina, Fabien Girardin y Rohit Gupta",
    nameSpanish: "Enseñando Inteligencia Artificial a Diseñadores UX | Nicolás Bronzina, Fabien Girardin y Rohit Gupta",
    titleEs: true,
    section: "Los casos del apunte en detalle",
    materialType: "Artículo",
    yearContext: "Este material fue publicado en 2025 como síntesis de una sesión formativa impartida en UDIT sobre IA aplicada al diseño UX.",
    language: "Español",
    relevance: "Esta pieza es una excelente introducción a los principales conceptos que se desarrollan en la unidad didáctica. Los autores presentan el impacto de la IA en la práctica del diseño UX, explican la transformación del rol del diseñador y analizan las implicaciones de trabajar con sistemas generativos. Es un recurso especialmente adecuado para comprender el contexto general antes de profundizar en el resto de los materiales de esta biblioteca.",
    link: "https://medium.com/@nbronzina/ense%C3%B1ando-inteligencia-artificial-a-dise%C3%B1adores-ux-694c3a1611d7"
  },
  {
    id: 5,
    name: "Software Gets Personal for Organizations and Teams | Fabien Girardin y Lisa Gansky",
    nameSpanish: "Software Gets Personal for Organizations and Teams | Fabien Girardin y Lisa Gansky",
    section: "Ejercicio de lectura crítica del caso BBVA desde distintas perspectivas",
    materialType: "Artículo",
    yearContext: "Este material fue publicado en 2026 como parte de la serie Software Gets Personal, que se centra en la transformación de las organizaciones mediante IA.",
    language: "Inglés",
    relevance: "Este material analiza el caso de BBVA desde una perspectiva independiente para identificar los cambios organizativos asociados a la incorporación de la IA. Los autores examinan aspectos como la aparición de nuevos perfiles profesionales, la evolución de los equipos de trabajo y las condiciones que favorecen la adopción de estas tecnologías. Es un recurso especialmente útil para interpretar el caso desde una perspectiva estratégica y comprender cómo la IA transforma la organización más allá del desarrollo tecnológico.",
    link: "https://medium.com/personal-software/software-gets-personal-for-organizations-and-teams-2706b7f3bd22"
  },
  {
    id: 6,
    name: "Notas del canal oficial de innovación de BBVA",
    nameSpanish: "Notas del canal oficial de innovación de BBVA",
    titleEs: true,
    section: "Ejercicio de lectura crítica del caso BBVA desde distintas perspectivas",
    materialType: "Comunicación corporativa",
    yearContext: "Estas comunicaciones fueron publicadas entre 2024 y 2026 por BBVA para comunicar la evolución de su estrategia de IA y su colaboración con OpenAI.",
    language: "Español",
    relevance: "Estas publicaciones permiten seguir la evolución del programa de IA de BBVA desde la perspectiva de la propia organización. Documentan el acuerdo inicial con OpenAI, la ampliación progresiva del despliegue y la consolidación de una alianza estratégica para extender el uso de estas tecnologías a toda la empresa. Es un recurso interesante para analizar cómo una organización comunica públicamente su estrategia de innovación y qué aspectos prioriza en su discurso institucional.",
    links: [
      { label: "Ver acuerdo inicial con OpenAI", url: "https://www.bbva.com/es/innovacion/bbva-acelera-sus-planes-en-inteligencia-artificial-y-firma-un-acuerdo-con-openai/" },
      { label: "Ver ampliación a 11.000 licencias", url: "https://www.bbva.com/es/innovacion/bbva-amplia-el-acuerdo-con-openai-a-11-000-licencias-de-chatgpt-para-sus-empleados/" },
      { label: "Ver alianza estratégica y programa The Eight", url: "https://www.bbva.com/es/innovacion/bbva-y-openai-sellan-una-alianza-estrategica-para-redefinir-la-banca-con-inteligencia-artificial/" }
    ]
  },
  {
    id: 7,
    name: "Estudios de OpenAI sobre el caso de BBVA",
    nameSpanish: "Estudios de OpenAI sobre el caso de BBVA",
    titleEs: true,
    section: "Ejercicio de lectura crítica del caso BBVA desde distintas perspectivas",
    materialType: "Casos de estudio",
    yearContext: "OpenAI publicó estas piezas en 2024 y 2025 para documentar la implantación de sus soluciones en BBVA.",
    language: "Inglés y español",
    relevance: "Estos estudios presentan la evolución del proyecto desde la perspectiva del proveedor tecnológico, que describe tanto la fase piloto como el despliegue a gran escala. Analizan aspectos como la adopción de las herramientas, la creación de asistentes personalizados y el impacto en la productividad de la organización. Permiten comprender cómo OpenAI comunica los resultados que obtienen sus clientes y favorece una interpretación crítica de este tipo de casos de éxito.",
    links: [
      { label: "Ver estudio 2024", url: "https://openai.com/index/bbva/" },
      { label: "Ver estudio 2025", url: "https://openai.com/index/bbva-2025/" }
    ]
  },
  {
    id: 8,
    name: "El caso BBVA visto desde la prensa",
    nameSpanish: "El caso BBVA visto desde la prensa",
    titleEs: true,
    section: "Ejercicio de lectura crítica del caso BBVA desde distintas perspectivas",
    materialType: "Cobertura periodística y artículo de análisis",
    yearContext: "Estos materiales fueron publicados entre 2025 y 2026 por Bloomberg y Harvard Business Review.",
    language: "Inglés",
    relevance: "Estos recursos ofrecen una visión independiente del caso BBVA desde el ámbito periodístico y del análisis empresarial. Bloomberg informa sobre la implantación de ChatGPT en la organización y Harvard Business Review utiliza el caso para reflexionar sobre la adopción de la IA en las empresas. La comparación entre estas publicaciones y las fuentes corporativas permite analizar cómo cambia el relato según el contexto y los objetivos de cada autor.",
    links: [
      { label: "Ver artículo de Bloomberg", url: "https://www.bloomberg.com/news/articles/2025-12-12/bbva-rolls-out-chatgpt-to-almost-all-employees-in-openai-deal" },
      { label: "Ver copia de archivo (Bloomberg)", url: "http://archive.today/Hriz6" },
      { label: "Ver artículo de Harvard Business Review", url: "https://hbr.org/2026/04/the-hidden-demand-for-ai-inside-your-company" },
      { label: "Ver copia de archivo (HBR)", url: "http://archive.today/92KTW" }
    ]
  },
  {
    id: 9,
    name: "Malleable Software: Restoring User Agency in a World of Locked-Down Apps | Geoffrey Litt",
    nameSpanish: "Malleable Software: Restoring User Agency in a World of Locked-Down Apps | Geoffrey Litt",
    section: "El software personal en la práctica",
    materialType: "Ensayo de investigación",
    yearContext: "Ink & Switch publicó este material en 2025 como investigación sobre el futuro del software personal.",
    language: "Inglés",
    relevance: "Este ensayo desarrolla el concepto de malleable software y defiende un modelo en el que las personas puedan adaptar las aplicaciones a sus propias necesidades en lugar de depender de productos completamente cerrados. Sus autores relacionan esta visión con el desarrollo reciente de la IA generativa y proponen principios de diseño que favorecen una mayor autonomía de los usuarios. Es una de las referencias fundamentales para comprender los principios que sustentan el concepto de personal software.",
    embedUrl: "https://www.inkandswitch.com/essay/malleable-software/",
    link: "https://www.inkandswitch.com/essay/malleable-software/"
  },
  {
    id: 10,
    name: "Local-First Software: You Own Your Data, Despite the Cloud | Martin Kleppmann",
    nameSpanish: "Local-First Software: You Own Your Data, Despite the Cloud | Martin Kleppmann",
    section: "El software personal en la práctica",
    materialType: "Ensayo de investigación",
    yearContext: "Ink & Switch publicó este material en 2019 como texto fundacional del movimiento Local-First Software.",
    language: "Inglés",
    relevance: "Este ensayo propone un conjunto de principios para desarrollar aplicaciones que mantengan los datos bajo el control de las personas usuarias, incluso en entornos conectados a la nube. Aunque fue publicado antes de la expansión de la IA generativa, sus planteamientos todavía son una referencia para comprender los fundamentos técnicos y conceptuales de un software más autónomo, sostenible y centrado en el usuario. Sus aportaciones ayudan a contextualizar el desarrollo del personal software desde una perspectiva de diseño e infraestructura tecnológica.",
    embedUrl: "https://www.inkandswitch.com/local-first/",
    link: "https://www.inkandswitch.com/local-first/"
  },
  {
    id: 11,
    name: "localfirst.fm | comunidad Local-First",
    nameSpanish: "localfirst.fm | comunidad Local-First",
    titleEs: true,
    section: "El software personal en la práctica",
    materialType: "Pódcast",
    yearContext: "Este espacio está activo desde 2024 como un canal de difusión del movimiento Local-First.",
    language: "Inglés",
    relevance: "Este pódcast reúne conversaciones con algunas de las personas que están impulsando el movimiento Local-First. Los episodios dedicados a Maggie Appleton y Adam Wulf son especialmente relevantes porque analizan conceptos como los barefoot developers, el desarrollo de software por usuarios finales y el proyecto Muse como ejemplo de personal software. Son contenidos que permiten conocer cómo los principios que se abordan en esta unidad didáctica se trasladan a proyectos y experiencias reales.",
    embedUrl: "https://www.localfirst.fm/13",
    links: [
      { label: "Ver episodio 13 (Maggie Appleton)", url: "https://www.localfirst.fm/13" },
      { label: "Ver episodio 20 (Adam Wulf)", url: "https://www.localfirst.fm/20" }
    ]
  },
  {
    id: 12,
    name: "Local-First News | comunidad Local-First",
    nameSpanish: "Local-First News | comunidad Local-First",
    section: "El software personal en la práctica",
    materialType: "Boletín y archivo comunitario",
    yearContext: "Este material está activo desde 2024 como boletín especializado en el ecosistema Local-First.",
    language: "Inglés",
    relevance: "Este boletín recopila proyectos, herramientas, investigaciones y novedades relacionadas con el movimiento Local-First. Es una fuente de consulta especialmente útil para conocer la evolución de este ámbito, identificar nuevas iniciativas y mantenerse al día sobre una comunidad que está redefiniendo la forma de desarrollar software centrado en las personas.",
    embedUrl: "https://www.localfirstnews.com/",
    link: "https://www.localfirstnews.com/"
  },
  {
    id: 13,
    name: "People + AI Guidebook (tercera edición) | Google PAIR",
    nameSpanish: "People + AI Guidebook (tercera edición) | Google PAIR",
    section: "Guías",
    materialType: "Guía de diseño",
    yearContext: "Esta pieza fue publicada en 2025 por Google PAIR (People + AI Research) como actualización de su guía para el diseño de sistemas basados en IA.",
    language: "Inglés",
    relevance: "Esta guía organiza el diseño de productos con IA a lo largo de todo su ciclo de desarrollo, desde la definición del problema hasta la puesta en producción. Incluye recomendaciones específicas sobre IA responsable, modelos generativos y comunicación con las personas usuarias. Es una de las referencias internacionales más utilizadas para integrar los principios de experiencia de usuario en proyectos de IA.",
    link: "https://pair.withgoogle.com/guidebook/"
  },
  {
    id: 14,
    name: "HAX Toolkit | Microsoft",
    nameSpanish: "HAX Toolkit | Microsoft",
    titleEs: true,
    section: "Guías",
    materialType: "Guía de diseño",
    yearContext: "Este material fue publicado en 2019 por Microsoft Research como marco de referencia para el diseño de sistemas basados en IA.",
    language: "Inglés",
    relevance: "El HAX Toolkit traducen principios de diseño en recomendaciones aplicables al desarrollo de interfaces y facilita comprender cómo incorporar criterios de diseño centrados en las personas en sistemas que incorporan IA.",
    link: "https://www.microsoft.com/en-us/haxtoolkit/design-library/"
  },
  {
    id: 15,
    name: "Carbon Design System. AI Label y patrones de IA | IBM",
    nameSpanish: "Carbon Design System. AI Label y patrones de IA | IBM",
    titleEs: true,
    section: "Guías",
    materialType: "Sistema de diseño",
    yearContext: "Este material fue actualizado entre 2024 y 2026 como parte del sistema de diseño Carbon de IBM.",
    language: "Inglés",
    relevance: "Este recurso muestra cómo IBM incorpora la transparencia como un componente explícito de su sistema de diseño mediante el elemento AI Label, que está destinado a identificar de forma clara los contenidos generados por IA. Además, documenta patrones de interacción y componentes reutilizables que facilitan la integración de funcionalidades basadas en IA. Constituye un ejemplo destacado de cómo los principios éticos y regulatorios pueden materializarse en decisiones concretas de diseño.",
    embedUrl: "https://carbondesignsystem.com/components/ai-label/usage/",
    link: "https://carbondesignsystem.com/components/ai-label/usage/"
  },
  {
    id: 16,
    name: "Human Interface Guidelines. Generative AI | Apple",
    nameSpanish: "Human Interface Guidelines. Generative AI | Apple",
    section: "Guías",
    materialType: "Guía de diseño",
    yearContext: "Esta pieza fue publicada en 2025 como parte de las Human Interface Guidelines de Apple.",
    language: "Inglés",
    relevance: "En esta guía Apple presenta recomendaciones específicas para diseñar experiencias basadas en IA generativa desde una perspectiva centrada en la persona usuaria. Aborda la presentación de contenido generado, la comunicación de errores, la construcción de confianza y el mantenimiento del control por parte del usuario. Su propuesta es un referente útil para comparar distintos enfoques de diseño de interacción con IA desarrollados por la industria.",
    embedUrl: "https://developer.apple.com/design/human-interface-guidelines/generative-ai",
    link: "https://developer.apple.com/design/human-interface-guidelines/generative-ai"
  },
  {
    id: 17,
    name: "Claude's Constitution | Anthropic",
    nameSpanish: "Claude's Constitution | Anthropic",
    section: "Guías",
    materialType: "Documento técnico",
    yearContext: "Publicado en 2026 por Anthropic como documento de referencia sobre los principios que orientan el comportamiento del modelo Claude.",
    language: "Inglés",
    relevance: "Este documento expone los principios y valores utilizados para entrenar el modelo de IA de Claude. Muestra de forma transparente los criterios que orientan las respuestas de la herramienta. A diferencia de las guías centradas en el diseño de interfaces, permite comprender cómo las decisiones adoptadas durante el entrenamiento del modelo condicionan posteriormente su comportamiento. Es un recurso especialmente útil para relacionar el diseño de sistemas de IA con los debates sobre gobernanza, transparencia y responsabilidad que se abordan en la unidad didáctica.",
    link: "https://www.anthropic.com/constitution"
  },
  {
    id: 18,
    name: "AI Ethics y C2PA (Coalition for Content Provenance and Authenticity) | Adobe y Coalition for Content Provenance and Authenticity",
    nameSpanish: "AI Ethics y C2PA (Coalition for Content Provenance and Authenticity) | Adobe y Coalition for Content Provenance and Authenticity",
    titleEs: true,
    section: "Guías",
    materialType: "Marco ético y especificación técnica",
    yearContext: "La versión 2.4 fue publicada por Adobe y la Coalition for Content Provenance and Authenticity como referencia para la trazabilidad de contenidos generados mediante IA.",
    language: "Inglés",
    relevance: "Estos recursos muestran cómo los principios éticos pueden trasladarse a soluciones técnicas concretas. Adobe establece un marco para el desarrollo responsable de sistemas basados en IA y el estándar C2PA define un sistema de metadatos que permite registrar la procedencia y las modificaciones realizadas sobre imágenes, audio y vídeo. Son referencias fundamentales para comprender los mecanismos de transparencia y trazabilidad que están incorporándose a la regulación internacional sobre IA.",
    links: [
      { label: "Ver AI Ethics (Adobe)", url: "https://www.adobe.com/ai/overview/ethics.html" },
      { label: "Ver especificación C2PA 2.4", url: "https://spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html" }
    ]
  },
  {
    id: 19,
    name: "Reglamento (UE) 2024/1689 sobre Inteligencia Artificial | Parlamento Europeo y del Consejo de la Unión Europea",
    nameSpanish: "Reglamento (UE) 2024/1689 sobre Inteligencia Artificial | Parlamento Europeo y del Consejo de la Unión Europea",
    titleEs: true,
    section: "La regulación operativa",
    materialType: "Texto legislativo",
    yearContext: "Este texto fue publicado en 2024 como el marco regulador europeo sobre IA.",
    language: "Español",
    relevance: "Este reglamento es la fuente normativa de referencia para comprender la regulación de la IA en la Unión Europea. Es especialmente relevante por establecer obligaciones relacionadas con la alfabetización en IA, la gestión de riesgos y la transparencia de determinados sistemas y contenidos generados mediante IA. Permite interpretar directamente el marco legal sobre el que se apoyan los contenidos desarrollados en esta unidad didáctica.",
    link: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32024R1689"
  },
  {
    id: 20,
    name: "Code of Practice on the Transparency of AI-Generated Content | Comisión Europea (Oficina de IA)",
    nameSpanish: "Code of Practice on the Transparency of AI-Generated Content | Comisión Europea (Oficina de IA)",
    section: "La regulación operativa",
    materialType: "Código de buenas prácticas",
    yearContext: "Esta pieza fue publicada en 2026 por la Oficina de IA de la Comisión Europea como guía para la aplicación de las obligaciones de transparencia previstas en el reglamento europeo de IA.",
    language: "Español",
    relevance: "Este documento desarrolla de forma práctica las obligaciones de transparencia establecidas en la normativa europea sobre IA. Incluye recomendaciones dirigidas tanto a proveedores como a organizaciones que implantan estos sistemas y orientaciones para facilitar su cumplimiento. Es una referencia esencial para comprender cómo los principios que se recogen en la legislación se traducen en medidas concretas aplicables al desarrollo y uso de sistemas basados en IA.",
    link: "https://digital-strategy.ec.europa.eu/es/policies/code-practice-ai-generated-content"
  },
  {
    id: 21,
    name: "Iconos oficiales para el etiquetado de contenido generado por IA | Comisión Europea",
    nameSpanish: "Iconos oficiales para el etiquetado de contenido generado por IA | Comisión Europea",
    titleEs: true,
    section: "La regulación operativa",
    materialType: "Recurso institucional",
    yearContext: "Este material fue publicado en 2026 por la Comisión Europea.",
    language: "Multilingüe",
    relevance: "Esta pieza reúne los iconos oficiales para identificar contenidos generados o modificados mediante IA. Es un recurso práctico para incorporar al diseño de interfaces, productos y servicios digitales los requisitos de transparencia del reglamento europeo de IA.",
    link: "https://digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content"
  },
  {
    id: 22,
    name: "Borrador de directrices sobre las obligaciones de transparencia del artículo 50 | Comisión Europea",
    nameSpanish: "Borrador de directrices sobre las obligaciones de transparencia del artículo 50 | Comisión Europea",
    titleEs: true,
    section: "La regulación operativa",
    materialType: "Documento de consulta",
    yearContext: "2026.",
    language: "Inglés",
    relevance: "Esta pieza desarrolla las obligaciones de transparencia recogidas en el artículo 50 del reglamento de IA, ofrece orientaciones para su aplicación en productos y servicios digitales y facilita la interpretación práctica del marco regulador europeo.",
    link: "https://digital-strategy.ec.europa.eu/en/library/draft-guidelines-implementation-transparency-obligations-certain-ai-systems-under-article-50-ai-act"
  },
  {
    id: 23,
    name: "Repositorio de prácticas de alfabetización en IA | Comisión Europea",
    nameSpanish: "Repositorio de prácticas de alfabetización en IA | Comisión Europea",
    titleEs: true,
    section: "La regulación operativa",
    materialType: "Repositorio institucional",
    yearContext: "2026.",
    language: "Multilingüe",
    relevance: "Esta pieza recopila iniciativas de alfabetización en IA desarrolladas por organizaciones públicas y privadas para cumplir las obligaciones establecidas en el reglamento europeo de IA. Ofrece ejemplos reales de programas de formación y sensibilización.",
    link: "https://digital-strategy.ec.europa.eu/en/policies/repository-ai-literacy-practices"
  },
  {
    id: 24,
    name: "Digital Omnibus on AI: Parliament Votes, Deadlines Redrawn | Dastra",
    nameSpanish: "Digital Omnibus on AI: Parliament Votes, Deadlines Redrawn | Dastra",
    section: "La regulación operativa",
    materialType: "Artículo",
    yearContext: "2026.",
    language: "Inglés",
    relevance: "Esta pieza analiza el calendario de aplicación del reglamento europeo de IA y aclara las diferencias entre la entrada en vigor de las obligaciones de transparencia y el resto de las disposiciones normativas. Es útil para comprender la implantación progresiva de la regulación.",
    link: "https://www.dastra.eu/en/blog/digital-omnibus-on-ai-parliament-votes-deadlines-redrawn/60108"
  },
  {
    id: 25,
    name: "SuperSkillsStack: Agency, Domain Knowledge, Imagination, and Taste in Human-AI Design Education | Qian Huang y King Wang Poon",
    nameSpanish: "SuperSkillsStack: Agency, Domain Knowledge, Imagination, and Taste in Human-AI Design Education | Qian Huang y King Wang Poon",
    section: "Rol, capacidades y horizonte con números",
    materialType: "Artículo",
    yearContext: "2026.",
    language: "Inglés",
    relevance: "Esta pieza presenta un marco basado en cuatro capacidades fundamentales para el diseño con IA y aporta evidencia empírica sobre el papel del juicio humano en la interpretación, evaluación y selección de soluciones generadas por estas herramientas.",
    link: "https://arxiv.org/abs/2603.07016"
  },
  {
    id: 26,
    name: "AI and Design, Fundamentals and the Future | con Dan Saffer",
    nameSpanish: "AI and Design, Fundamentals and the Future | con Dan Saffer",
    section: "Rol, capacidades y horizonte con números",
    materialType: "Pódcast",
    yearContext: "2026.",
    language: "Inglés",
    relevance: "Esta pieza analiza cómo la IA está transformando la práctica profesional del diseño y reflexiona sobre las capacidades que continúan siendo exclusivamente humanas. Es un material que complementa los contenidos de la unidad didáctica con la visión de profesionales de referencia en diseño de productos digitales.",
    link: "https://podcasts.apple.com/uy/podcast/68-ai-and-design-fundamentals-and-the-future-ft-dan-saffer/id1510667674?i=1000755241138"
  },
  {
    id: 27,
    name: "AI Is Making UX Harder, Not Better | con Dan Saffer",
    nameSpanish: "AI Is Making UX Harder, Not Better | con Dan Saffer",
    section: "Rol, capacidades y horizonte con números",
    materialType: "Pódcast",
    yearContext: "2026.",
    language: "Inglés",
    relevance: "Este material reflexiona sobre cómo la IA incrementa la complejidad del trabajo en experiencia de usuario al generar un mayor número de alternativas que requieren evaluación, selección y criterio profesional. Constituye un buen complemento para comprender la evolución del rol del diseñador en entornos basados en IA.",
    link: "https://podcasts.apple.com/us/podcast/13-ai-is-making-ux-harder-not-better-dan-saffer-on/id1510832977?i=1000758428611"
  },
  {
    id: 28,
    name: "Hyperscaled: The Global Challenge of Sustainability in AI | Kate Crawford",
    nameSpanish: "Hyperscaled: The Global Challenge of Sustainability in AI | Kate Crawford",
    section: "Rol, capacidades y horizonte con números",
    materialType: "Vídeo",
    yearContext: "Estas conferencias fueron presentadas en 2024 y 2025.",
    language: "Inglés y español",
    relevance: "Estas charlas analizan el impacto ambiental de la IA generativa desde la perspectiva del consumo de energía, agua y materias primas. Ofrecen una visión fundamentada sobre los retos de sostenibilidad asociados a los modelos de gran escala.",
    embedUrl: "https://www.youtube.com/embed/4xhu0kAsSA0",
    links: [
      { label: "Ver charla 2024", url: "https://www.youtube.com/watch?v=4xhu0kAsSA0" },
      { label: "Ver charla 2025", url: "https://www.youtube.com/watch?v=BmJGFKgY6ZE" }
    ]
  },
  {
    id: 29,
    name: "How Hungry Is AI? Benchmarking Energy, Water, and Carbon Footprint of LLM Inference | Nidhal Jegham y otros",
    nameSpanish: "How Hungry Is AI? Benchmarking Energy, Water, and Carbon Footprint of LLM Inference | Nidhal Jegham y otros",
    section: "Rol, capacidades y horizonte con números",
    materialType: "Artículo",
    yearContext: "2025.",
    language: "Inglés",
    relevance: "Este material presenta una metodología para medir el consumo energético, la huella hídrica y las emisiones de carbono derivadas del uso de modelos de lenguaje. Proporciona datos útiles para fundamentar decisiones de diseño relacionadas con la sostenibilidad de sistemas basados en IA.",
    link: "https://arxiv.org/abs/2505.09598"
  },
  {
    id: 30,
    name: "Power Hungry: How AI Will Drive Energy Demand | Fondo Monetario Internacional",
    nameSpanish: "Power Hungry: How AI Will Drive Energy Demand | Fondo Monetario Internacional",
    section: "Rol, capacidades y horizonte con números",
    materialType: "Documento de trabajo",
    yearContext: "2025.",
    language: "Inglés",
    relevance: "Este material analiza el impacto previsto de la IA sobre la demanda energética mundial y sitúa el desarrollo de estas tecnologías dentro de un contexto económico y de infraestructuras. Ayuda a comprender las implicaciones del crecimiento de los centros de datos.",
    link: "https://www.imf.org/en/publications/wp/issues/2025/04/21/power-hungry-how-ai-will-drive-energy-demand-566304"
  },
  {
    id: 31,
    name: "Post-Quantum Cryptography Standardization | National Institute of Standards and Technology (NIST)",
    nameSpanish: "Post-Quantum Cryptography Standardization | National Institute of Standards and Technology (NIST)",
    section: "Rol, capacidades y horizonte con números",
    materialType: "Estándar técnico",
    yearContext: "2024.",
    language: "Inglés",
    relevance: "Este material resume el proceso de estandarización de la criptografía poscuántica y explica la adopción de nuevos algoritmos de seguridad para proteger la información frente a futuras amenazas derivadas de la computación cuántica.",
    link: "https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography"
  },
  {
    id: 32,
    name: "GR00T N1: An Open Foundation Model for Generalist Humanoid Robots | NVIDIA",
    nameSpanish: "GR00T N1: An Open Foundation Model for Generalist Humanoid Robots | NVIDIA",
    section: "Rol, capacidades y horizonte con números",
    materialType: "Artículo",
    yearContext: "2025.",
    language: "Inglés",
    relevance: "Esta pieza presenta un modelo fundacional para robots humanoides capaces de interpretar instrucciones en lenguaje natural. Permite reflexionar sobre la evolución de la interacción entre personas y sistemas inteligentes y sobre los nuevos escenarios para el diseño de experiencia de usuario.",
    link: "https://arxiv.org/abs/2503.14734"
  },
  {
    id: 33,
    name: "Tokenisation of Government Bonds y Survey on Central Bank Digital Currencies | Bank for International Settlements",
    nameSpanish: "Tokenisation of Government Bonds y Survey on Central Bank Digital Currencies | Bank for International Settlements",
    titleEs: true,
    section: "Rol, capacidades y horizonte con números",
    materialType: "Informes institucionales",
    yearContext: "2025.",
    language: "Inglés",
    relevance: "Estos materiales analizan la evolución de la tokenización de activos financieros y de las monedas digitales emitidas por bancos centrales. Ofrecen una visión basada en evidencia sobre el grado de madurez de estas tecnologías y su posible impacto en el desarrollo de futuros productos y servicios digitales.",
    embedUrl: "https://www.bis.org/publ/bisbull107.htm",
    links: [
      { label: "Ver Tokenisation of Government Bonds", url: "https://www.bis.org/publ/bisbull107.htm" },
      { label: "Ver Survey on Central Bank Digital Currencies", url: "https://www.bis.org/publ/bppdf/bispap159.pdf" }
    ]
  }
];
