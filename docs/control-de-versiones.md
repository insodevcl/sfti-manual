---
sidebar_position: 100
custom_edit_url: null
slug: /control-de-versiones
---

# Control de versiones

:::info Información
**¿Qué es un control de versiones?**

El control de versiones es un sistema que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo, de modo que puedas recuperar versiones específicas más adelante.
:::

## Versiones

### Versión 1.101.0 (agosto 2025)
1. [Evolutivo] Módulo de EPP
   1. Traspaso del módulo de gestión de EPPs a módulo HEMTIE
   2. Se agrega mantenciones a los EPP
2. [Evolutivo] Función de difusión de registro de documentos (DS44)
3. [Evolutivo] Incorporación de T.E.S. a Trabajadores de empresa y contratistas (DS44)
4. [Evolutivo] Se agrega límite (número máximo) para la carga de documentos de contratistas por carpeta.
5. [Evolutivo] Se genera vinculación en el registro de capacitación, con el objetivo de enlazar los registros de documentos ya existente en la plataforma.
6. [Evolutivo] Se modifica la AST para gestionar la funciones de las actividades como un campo de selección múltiple.

### Versión 1.100.0 (julio 2025)
1. [Evolutivo] Mejoras en el módulo de Acta de reunión de CPHS:
   1. Posibilidad de agregar uno o más documentos al acta de la reunión, estos son enviados como adjuntos en el correo electrónico de firma electrónica simple.
   2. Mejoras en la interfaz de usuario y organización de los contenidos.
2. [Evolutivo] Mejoras en el módulo de Reuniones de coordinación:
   1. Posibilidad de agregar como asistentes a colaboradores de otras razones sociales.
   2. Posibilidad de agregar uno o más documentos al acta de la reunión, estos son enviados como adjuntos en el correo electrónico de firma electrónica simple.
   3. Mejoras en la interfaz de usuario y organización de los contenidos.
3. [Evolutivo] Mejoras en el módulo de Análisis de datos:
   1. Se agregan los textos descriptivos faltantes en cada reporte, informe y panel.
   2. Se mejora la interfaz de los paneles, sustituyendo los filtros de la parte superior e incorporándolos en un panel lateral desplegable.
   3. Se mejora la carga de información de los paneles con subdivisiones en las consultas cuando se aplican filtros.
4. [Evolutivo] Se agrega logo por Unidad.
5. [Evolutivo] Mejoras en la inspección de seguridad:
   1. Se cambia campo de departamento por desplegables.
   2. Se añade mantenedores para gestión de departamentos para inspección de seguridad en configuración de empresa.
6. [Correctivo] Correcciones a errores reportados por usuarios posterior a la versión 1.99.1.

### Versión 1.99.1 (abril - mayo 2025)
1. [Nuevo requerimiento] Protocolo MINSAL (Polvo no especificado).
2. [Evolutivo] Modificación al procedimiento de investigación de accidentes (DS 44)
3. [Evolutivo] Se agrega metodología de investigación, árbol de causas, para la investigación de accidentes laborales.
4. [Evolutivo] Modificación de conceptos y funcionalidades a Reglamento interno (DS 44)
5. [Evolutivo] Modificación de conceptos y funcionalidades a ODI (general y específico) (IRL) (DS 44)
6. [Correctivo] Correcciones y ajustes al módulo de GRD
7. [Nuevo requerimiento] Nuevos perfiles para la plataforma Administrador, Supervisor, Realizador+, Realizador, Contratista y Mutualidad, que permiten filtrar la información de la plataforma según las siguientes reglas:
   1. **Administrador:** Administra y gestiona la plataforma
   2. **Supervisor:** Sin restricción de acceso a la información listada (no tiene acceso a la administración de la plataforma)
   3. **Realizador+**: Puede visualizar solo la información relacionada con su sucursal, faena y/o subárea, tomando como referencia los historiales de trabajo activos, así como la gestión realizada por el usuario.
   4. **Realizador:** Solo puede visualizar la información de la gestión realizada.
   5. **Contratista:** Acceso a la información y a los módulos relacionados con los prestadores de servicios.
   6. **Mutualidad:** Acceso a la información y a los módulos relacionados con las mutualidades.
8. [Nuevo requerimiento] Habilitación en el perfil de usuario, la autentificación por multi factor mediante la utilización de una “contraseña de un solo uso basada en tiempo (TOTP)”, mejorando el apartado de seguridad alineado con la próxima entrada en vigencia de ley de protección y tratamiento de los datos personales (ley 21.719).
9. [Correctivo] Ajustes internos de nombre y correcciones a errores reportados por usuarios.

### Versión 1.98.1 (marzo 2025)
1. [Nuevo requerimiento] Añadir mantenedores a configuración empresa de los temas para las ODI
   1. General
   2. Específico
2. [Evolutivo] Agregar información adicional al procedimiento de investigación de accidente
3. [Nuevo requerimiento] Reporte por unidad (holding)
   1. Procedimiento investigación de accidentes
   2. Procedimiento investigación enfermedades profesionales
   3. Trabajadores capacitados
   4. Estado Documento Entregados (de trabajadores)
   5. Auditorias realizadas
   6. Inspecciones y observaciones
   7. Reporte de comité de Actas de C.P.H.S.
   8. Estadísticas cerradas
   9. Programa de trabajo
   10. Estado de documentos contratista
4. [Evolutivo] Agregar y reorganiza la información del procedimiento de investigación de accidentes al PDF de salida de investigación de accidentes.
5. [Evolutivo] Mejoras al módulo de EPP:
   1. Se agrega grupo EPP en la configuración de empresa, que permite agrupar los EPP bajo un concepto.
   2. En el módulo de entrega especial de EPP:
      1. Se agrega la opción de entrega masiva, al seleccionar trabajadores de forma múltiple. Esto genera un registro de entrega por cada trabajador seleccionado.
      2. Se incorpora la nueva funcionalidad de EPP agrupados, pudiendo seleccionar los elementos a entregar por grupo.

### Versión 1.98.0 (febrero 2025)
1. [Correctivo] Mejoras en el módulo de GRD
2. [Nuevo requerimiento] Protocolo MINSAL (Hiperbaria).
3. [Nuevo requerimiento] Protocolo MINSAL (Exposición al frío o calor).
4. [Evolutivo] Mejoras al listado de Tareas cerradas.
   1. Se agrega buscador de filtro por tarea y/o descripción.
   2. Se agregan a los filtros, los estados de “No realizado (Incumplimiento) y No aplica”.
   3. Se subdividen las procedencias, esto mejora las búsquedas específicas.
5. [Evolutivo] Mejoras al módulo de Contratista - Documentación:
   1. Permite seleccionar múltiples documentos y ejecutar las acciones de aprobar o rechazar sobre ellos.
6. [Nuevo requerimiento] Integración de colaboradores SFTI / TALANA.
7. [Evolutivo] Nuevos campos para Contratistas y sus Trabajadores:
   1. Se agregan nuevos campos al historial de trabajo del contratista:
      1. Clasificación de la actividad (Requerido)
      2. Sucursal (Opcional)
      3. Faena (Opcional)
      4. Instalación (Opcional)
      5. Subárea (Opcional)
      6. Habitabilidad (Opcional)
   2. Se agregan nuevos campos al historial de trabajo del trabajador contratista:
      1. Profesión / oficio / especialidad
8. [Nuevo requerimiento] (YADRAN) Reporte de trabajadores de contratista.
9. [Evolutivo] Mejoras al módulo HEMTIE:
   1. Se agrega campo “Tipo” a la Instalación, con las opciones de: Fijas o Móviles

### 1.97.2
1. Se agrega la funcionalidad de "Carga Masiva de Trabajadores" en el módulo de Estructura Organizacional.


