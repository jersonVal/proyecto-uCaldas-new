export namespace Keys {
    export const carpetaFoto = "../../archivos/fotografias";
    export const nombreCampoImagenProducto = 'file';
    export const extensionesPermitidasIMG: string[] = ['.PNG', '.JPG', '.JPEG', '.SVG'];
    export const tamMaxImagenProducto = 1024 * 1024;
    export const carpetaFormato = '../../archivos/formato';
    export const carpetaArchivo = '../../archivos/archivo_solicitud';
    export const nombreCampoFormato = 'file';
    export const extensionesPermitidasDOC: string[] = ['.PDF', '.DOC', '.DOCX', '.XLS', '.XLSX'];
    export const carpetaFormatoDiligenciado = '../../archivos/formato_diligenciado';
    export const nombreCampoFormatoDiligenciado = 'file';
    export const extensionesFormatoDiligenciado: string[] = ['.PDF', '.DOC', '.DOCX', '.XLS', '.XLSX'];
    export const carpetaArchivoSolicitud = '../../archivos/formato';
    export const nombreCampoArchivoSolicitud = 'file';
    export const extensionesArchivoSolicitud: string[] = ['.PDF', '.DOC', '.DOCX', '.XLS', '.XLSX'];
    export const admin_rol = "617f715792854e2188063b68";
    export const url_validar_token = "http://localhost:5001/validar-token";
    export const hashNotificacion = '1234abcd'
    export const urlCorreo = 'http://localhost:5000/correo'
    export const asuntoSolicitud = 'Evaluacion de solicitud'
    export const mensajeSolicitud = 'Usted a sido seleccionado para evaluar la solicitud con id: '
    export function MensajeEmail(nombre: string, solicitud: string) {
        return `
<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <!--<![endif]-->
  <!--[if (gte mso 9)|(IE)]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
  <!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    body {width: 620px;margin: 0 auto;}
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
<![endif]-->
  <style type="text/css">
    body,
    p,
    div {
      font-family: arial, helvetica, sans-serif;
      font-size: 14px;
    }

    body {
      color: #000000;
    }

    body a {
      color: #932A89;
      text-decoration: none;
    }

    p {
      margin: 0;
      padding: 0;
    }

    table.wrapper {
      width: 100% !important;
      table-layout: fixed;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    img.max-width {
      max-width: 100% !important;
    }

    .column.of-2 {
      width: 50%;
    }

    .column.of-3 {
      width: 33.333%;
    }

    .column.of-4 {
      width: 25%;
    }

    ul ul ul ul {
      list-style-type: disc !important;
    }

    ol ol {
      list-style-type: lower-roman !important;
    }

    ol ol ol {
      list-style-type: lower-latin !important;
    }

    ol ol ol ol {
      list-style-type: decimal !important;
    }

    @media screen and (max-width:480px) {

      .preheader .rightColumnContent,
      .footer .rightColumnContent {
        text-align: left !important;
      }

      .preheader .rightColumnContent div,
      .preheader .rightColumnContent span,
      .footer .rightColumnContent div,
      .footer .rightColumnContent span {
        text-align: left !important;
      }

      .preheader .rightColumnContent,
      .preheader .leftColumnContent {
        font-size: 80% !important;
        padding: 5px 0;
      }

      table.wrapper-mobile {
        width: 100% !important;
        table-layout: fixed;
      }

      img.max-width {
        height: auto !important;
        max-width: 100% !important;
      }

      a.bulletproof-button {
        display: block !important;
        width: auto !important;
        font-size: 80%;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }

      .columns {
        width: 100% !important;
      }

      .column {
        display: block !important;
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }

      .social-icon-column {
        display: inline-block !important;
      }
    }
  </style>
  <!--user entered Head Start-->
  <!--End Head user entered-->
</head>

<body>
  <center class="wrapper" data-link-color="#932A89"
    data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#f0f0f0;">
    <div class="webkit">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#f0f0f0">
        <tr>
          <td valign="top" bgcolor="#f0f0f0" width="100%">
            <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0"
              border="0">
              <tr>
                <td width="100%">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td>
                        <!--[if mso]>
    <center>
    <table><tr><td width="620">
  <![endif]-->
                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                          style="width:100%; max-width:620px;" align="center">
                          <tr>
                            <td role="modules-container"
                              style="padding:0px 10px 0px 10px; color:#000000; text-align:left;" bgcolor="#F0F0F0"
                              width="100%" align="left">
                              <table class="module preheader preheader-hide" role="module" data-type="preheader"
                                border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
                                <tr>
                                  <td role="module-content">
                                    <p></p>
                                  </td>
                                </tr>
                              </table>
                              
                              <!--  -->
                              <table class="module" role="module" data-type="text" border="0" cellpadding="0"
                                cellspacing="0" width="100%" style="table-layout: fixed;"
                                data-muid="13d36c46-b515-4bdf-ad3c-edafb5c1c151" data-mc-module-version="2019-10-22">
                                <tbody>
                                  <tr>
                                    <td
                                      style="padding:20px 15px 15px 15px; line-height:26px; text-align:inherit; background-color:#d488cc;"
                                      height="100%" valign="top" bgcolor="#d488cc" role="module-content">
                                      <div>
                                        <div style="font-family: inherit; text-align: center"><span
                                            style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #932a89; font-size: 24px"><strong>T
                                              R A B A J O S &nbsp; &nbsp;U &nbsp;&nbsp; C A L D A S</strong></span></div>
                                        <div></div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                                role="module" data-type="columns" style="padding:50px 20px 50px 20px;" bgcolor="#3172a3"
                                data-distribution="1">
                                <tbody>
                                  <tr role="module-content">
                                    <td height="100%" valign="top">
                                      <table width="460"
                                        style="width:460px; border-spacing:0; border-collapse:collapse; margin:0px 50px 0px 50px;"
                                        cellpadding="0" cellspacing="0" align="left" border="0" bgcolor=""
                                        class="column column-0">
                                        <tbody>
                                          <tr>
                                            <td style="padding:0px;margin:0px;border-spacing:0;">
                                              <table class="module" role="module" data-type="text" border="0"
                                                cellpadding="0" cellspacing="0" width="100%"
                                                style="table-layout: fixed;"
                                                data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63"
                                                data-mc-module-version="2019-10-22">
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="padding:40px 0px 30px 0px; line-height:36px; text-align:inherit; background-color:#74bcd9;"
                                                      height="100%" valign="top" bgcolor="#74bcd9"
                                                      role="module-content">
                                                      <div>
                                                        <div style="font-family: inherit; text-align: center"><span
                                                            style="font-size: 46px; color: #ffffff; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif"><strong>
                                                              Solicitud Jurado
                                                            </strong></span></div>
                                                        <div></div>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table class="module" role="module" data-type="text" border="0"
                                                cellpadding="0" cellspacing="0" width="100%"
                                                style="table-layout: fixed;"
                                                data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63.2"
                                                data-mc-module-version="2019-10-22">
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="padding:50px 30px 30px 30px; line-height:28px; text-align:inherit; background-color:#ffffff;"
                                                      height="100%" valign="top" bgcolor="#ffffff"
                                                      role="module-content">
                                                      <div>
                                                        <div style="font-family: inherit; text-align: inherit"><span
                                                            style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">Hola
                                                            ${nombre},</span></div>
                                                        <div style="font-family: inherit; text-align: inherit"><br>
                                                        </div>
                                                        <div style="font-family: inherit; text-align: inherit"><span
                                                            style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">
                                                            Ha sido seleccionado para ser jurado de la solicitud: 
                                                            </span><span
                                                            style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #932a89"><strong>
                                                              ${solicitud}
                                                              </strong></span><span
                                                            style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">.
                                                            Click en los botonos de abajo para saber su respuesta.</span></div>
                                                        <div></div>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table border="0" cellpadding="0" cellspacing="0" class="module"
                                                data-role="module-button" data-type="button" role="module"
                                                style="table-layout:fixed;" width="100%"
                                                data-muid="d0bf6998-834d-4cc3-b775-8e43e7fcbf90">
                                                <tbody>
                                                  <tr>
                                                    <td align="left" bgcolor="#FFFFFF" class="outer-td"
                                                      style="padding:0px 0px 0px 30px; background-color:#FFFFFF;">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                        class="wrapper-mobile" style="text-align:center;">
                                                        <tbody>
                                                          <tr>
                                                            <td align="center" bgcolor="#932A89" class="inner-td"
                                                              style="border-radius:6px; font-size:16px; text-align:left; background-color:inherit;">
                                                              <a href=""
                                                                style="background-color:#932A89; border:0px solid #333333; border-color:#333333; border-radius:0px; border-width:0px; color:#ffffff; display:inline-block; font-size:16px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:15px 25px 15px 25px; text-align:center; text-decoration:none; border-style:solid; font-family:trebuchet ms,helvetica,sans-serif;"
                                                                target="_blank">Aceptar</a>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                    <td align="left" bgcolor="#FFFFFF" class="outer-td"
                                                      style="padding:0px 0px 0px 30px; background-color:#FFFFFF;">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                        class="wrapper-mobile" style="text-align:center;">
                                                        <tbody>
                                                          <tr>
                                                            <td align="center" bgcolor="#932A89" class="inner-td"
                                                              style="border-radius:6px; font-size:16px; text-align:left; background-color:inherit;">
                                                              <a href=""
                                                                style="background-color:#932A89; border:0px solid #333333; border-color:#333333; border-radius:0px; border-width:0px; color:#ffffff; display:inline-block; font-size:16px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:15px 25px 15px 25px; text-align:center; text-decoration:none; border-style:solid; font-family:trebuchet ms,helvetica,sans-serif;"
                                                                target="_blank">Cancelar</a>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table class="module" role="module" data-type="text" border="0"
                                                cellpadding="0" cellspacing="0" width="100%"
                                                style="table-layout: fixed;"
                                                data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63.1"
                                                data-mc-module-version="2019-10-22">
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="padding:40px 100px 50px 30px; line-height:26px; text-align:inherit; background-color:#FFFFFF;"
                                                      height="100%" valign="top" bgcolor="#FFFFFF"
                                                      role="module-content">
                                                      <div>
                                                        <div style="font-family: inherit; text-align: inherit"><span
                                                            style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 16px; color: #656565">Gracias!</span>
                                                        </div>
                                                        <div style="font-family: inherit; text-align: inherit"><span
                                                            style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 16px; color: #656565">
                                                            Equipo de asignacion de trabajos 
                                                            </span></div>
                                                        <div></div>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              
                              <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                                role="module" data-type="columns" style="padding:40px 0px 1px 0px;" bgcolor="#F0F0F0"
                                data-distribution="1">
                                <tbody>
                                  <tr role="module-content">
                                    <td height="100%" valign="top">
                                      <table width="580"
                                        style="width:580px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 10px;"
                                        cellpadding="0" cellspacing="0" align="left" border="0" bgcolor=""
                                        class="column column-0">
                                        <tbody>
                                          <tr>
                                            <td style="padding:0px;margin:0px;border-spacing:0;">
                                              <div data-role="module-unsubscribe" class="module" role="module"
                                                data-type="unsubscribe"
                                                style="color:#932A89; font-size:12px; line-height:22px; padding:16px 16px 5px 16px; text-align:Center;"
                                                data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">
                                                <div class="Unsubscribe--addressLine">
                                                  <p class="Unsubscribe--senderName"
                                                    style="font-family:trebuchet ms,helvetica,sans-serif; font-size:12px; line-height:22px;">
                                                    {{Sender_Name}}</p>
                                                  <p
                                                    style="font-family:trebuchet ms,helvetica,sans-serif; font-size:12px; line-height:22px;">
                                                    <span class="Unsubscribe--senderAddress">{{Sender_Address}}</span>,
                                                    <span class="Unsubscribe--senderCity">{{Sender_City}}</span>, <span
                                                      class="Unsubscribe--senderState">{{Sender_State}}</span> <span
                                                      class="Unsubscribe--senderZip">{{Sender_Zip}}</span></p>
                                                </div>
                                                
                                              </div>

                                              <br>
                                              
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            <![endif]-->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </center>
</body>

</html>
        `
    }

}
