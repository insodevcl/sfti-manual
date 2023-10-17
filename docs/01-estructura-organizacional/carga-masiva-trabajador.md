---
sidebar_position: 6
custom_edit_url: null
---
# Instrucciones Carga Masiva Trabajadores
## Introducción

El sistema de carga masiva de trabajadores tiene como finalidad facilitar la carga de una lista de trabajadores con datos básicos.

## ¿Cómo realizo una carga masiva de trabajadores?

Para realizar una carga masiva de Trabajadores debe dirigirse a:

<div align="center">

```bash
Menú SafeTI → Estructura Organizacional → Trabajador
```
</div>

El sistema mostrará una tabla con todos los trabajadores de la empresa registrados, en el encabezado de la ventana podrá ver cinco botones:

<div align="center">

![botones](/img/img_manual/img_estructura_organizacional/2023-09-29_11-48.png)

</div>

* **Trabajadores sin historial**: son trabajadores agregados pero sin historial.

* **Carga Masiva**: sistema de carga de trabajadores en masa, desde una planilla de cálculo con formato consumible. 

* **+Agregar**: ingresar trabajador uno a uno. 

* **Declaración Salud PDF**: para descargar un documento en PDF y para solicitar captura manual de información.

* **QR Consulta Trabajador**: generador de código QR, direcciona al menú trabajador donde debe ingresar el rut del trabajador para obtener sus datos.

## Carga Masiva
Al hacer clic en el botón de **Carga Masiva**, se desplegará una nueva ventana, aquí tiene que seguir 3 pasos:

<div align="center">

![carga masiva](/img/img_manual/img_estructura_organizacional/2023-09-29_11-50.png)

</div>

1. Descargar la plantilla modelo, donde cargara la información, tiene formato de MS Excel.
2. Suba el archivo con la información cargada.
3. Seleccionar el archivo desde su computador, clic en **“Continuar”**.

## Plantilla Carga Masiva
En la plantilla modelo ***“empresa_trabajador_carga_masiva_.xlsx”***, encontrará una hoja llamada ***“carga_masiva”***, en la cual encontrara las siguientes columnas, entre otras.

<div align="center">

![documento](/img/img_manual/img_estructura_organizacional/2023-09-29_11-52.png)

</div>

| Nº | Dato | Tipo | Nota |
|----|------|------|------|
| 1 | RUT | Requerido | Rut del trabajador en formato 12345678-0 o 12.345.678-0. |
| 2 | Nombre | Requerido | Nombre del trabajador. |
| 3 | Fecha de nacimiento | Requerido | En formato año-mes-día (2022-12-31). |
| 4 | Sexo | Requerido | Desplegable, seleccione una opción. |
| 5 | Estado Civil | Requerido | Desplegable, seleccione una opción. |
| 6 | Nacionalidad | Requerido | Escriba la nacionalidad. |
| 7 | Comuna | Requerido | Desplegable, seleccione una opción. |
| 8 | Dirección | Requerido | Escriba la dirección. |
| 9 | E-mail empresa | Opcional | Respete el formato de email. |
| 10 | E-mail personal | Opcional | Respete el formato de email. |
| 11 | Teléfono | Opcional | Escriba el teléfono de contacto. |
| 12 | Teléfono 2 | Opcional | Escriba el teléfono de contacto. |
| 13 | Situación laboral | Requerido | Seleccione: Vigente o Desvinculado. |
| 14 | Cargo | Requerido | Desplegable, seleccione una opción. |
| 15 | Tipo de contrato | Requerido | Desplegable, seleccione una opción. |
| 16 | Fecha de ingreso | Requerido | En formato año-mes-día (2022-12-31). |
| 17 | Fecha de término | Requerido | Si el contrato no es indefinido). |
| 18 | Hora de inicio | Opcional | En formato HH:MM (08:00). |
| 19 | Hora de término | Opcional | En formato HH:MM (18:00). |

Complete la plantilla con los trabajadores y grabe los cambios, guarde el archivo en una carpeta conocida.

## Procesar Archivo de Carga Masiva
Ahora debe hacer clic en el botón **“Seleccionar archivo”**, se abrirá el navegador de archivos de su sistema operativo, navegue a la carpeta donde guardó el archivo **“empresa_trabajador_carga_masiva_.xlsx**”, una vez seleccionado, debe hacer clic en **“Continuar”**, el archivo será procesado por el sistema.

Se mostrará el resultado de la carga masiva, si algún trabajador ya estaba registrado, se verá el mensaje “Trabajador actualizado con éxito”, si algún dato contiene un error, se verá el siguiente mensaje “Columna “RUT” contiene un valor erróneo”.

:::caution Precaución
No debe cambiar el nombre del archivo, así como tampoco el nombre de la hoja **“carga_masiva”**, ni tampoco el nombre de las columnas, o esto podría causar error al procesar el archivo.
:::

:::info Información
Si se produce algún error en el proceso de carga del archivo, genere un ticket de soporte adjuntando el archivo de carga masiva y una imagen del error que aparece en pantalla.
:::

:::tip Tip
Verifique los nombres de los cargos en **Estructura Organizacional**, ya que deben estar escritas de la misma forma, respetando mayúsculas y minúsculas.
:::
