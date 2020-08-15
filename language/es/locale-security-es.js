languageSecurity = {
    fileFor: 'security',
    dialogHeadline: 'Declaración de seguridad',
    dialogText: `
                <div class="wrapper layout vertical justified">
                    <p>Los usuarios de Record Evolution han confiado en Record Evolution con su información, y estamos comprometidos a tomarnos en serio la seguridad y privacidad de nuestros usuarios. Record Evolution utiliza algunas de las tecnologías de seguridad en Internet más avanzadas disponibles en el mercado en la actualidad. Esta Declaración de Seguridad tiene por objeto proporcionar transparencia sobre nuestra infraestructura y prácticas de seguridad para asegurarle que su información está adecuadamente protegida. Encontrará más información sobre el tratamiento de datos en nuestra declaración de protección de datos. Record Evolution es un producto basado en una plataforma Google Cloud. Por lo tanto, la mayoría de las medidas de seguridad son proporcionadas por la plataforma Google Cloud Platform, que implementa un modelo completo de seguridad de Google. Esta declaración de seguridad describe las medidas de seguridad más importantes para proteger sus datos. Para más información, visite<a rel="noopener" target="_blank" href="https://cloud.google.com/security/">https://cloud.google.com/security/</a></p>
                    <h3>A. Seguridad del usuario</h3>
                    <h4> 1. Autentificación:</h4>
                    <p>Los datos de los usuarios en nuestra base de datos están separados lógicamente por reglas de acceso basadas en cuentas. Las cuentas de usuario tienen nombres de usuario y contraseñas únicos, que deben introducirse cada vez que un usuario inicia sesión. Record Evolution emite una cookie de sesión para almacenar sólo información de autenticación cifrada durante una sesión específica. La cookie de sesión no contiene la contraseña del usuario.</p>
                    <h4> 2. Contraseñas:</h4>
                    <p>Las contraseñas para aplicaciones de usuario tienen requisitos mínimos de complejidad. Las contraseñas son hashed y salteadas.</p>
                    <h4> 3. Encriptación de datos:</h4>
                    <p>Algunos datos sensibles de los usuarios, como las contraseñas de las cuentas, se almacenan de forma encriptada. La información de la tarjeta de crédito no se almacena en nuestra base de datos.</p>
                    <h4> 4. Protección de datos:</h4>
                    <p>Tenemos una política de privacidad completa que proporciona una visión muy transparente de cómo tratamos su información, incluyendo cómo la usamos, con quién la compartimos, y cómo la almacenamos, la eliminamos y la bloqueamos.</p>
                    <h4> 5. Retención de datos:</h4>
                    <p>Todos los datos de los usuarios de Record Evolution se almacenan en servidores en Alemania.</p>
                    <h3>B. Disponibilidad</h3>
                    <h4>1. Conexión:</h4>
                    <p>Utilizamos conexiones de red IP totalmente redundantes con múltiples conexiones independientes a varios proveedores de acceso a Internet de nivel 1.
                        <h4>2. Servicio:</h4>
                        <p>Los servidores tienen fuentes de alimentación internas y externas redundantes y controles ambientales. Los centros de datos disponen de fuentes de alimentación de emergencia y pueden obtener energía de las distintas subestaciones de la red, de varios generadores diesel y de baterías de reserva.</p>
                        <h4>3. Tiempo de funcionamiento:</h4>
                        <p>Monitoreo continuo del tiempo de actividad, con notificaciones inmediatas a los empleados de Record Evolution de cualquier tiempo de inactividad.</p>
                        <h4>4. Conmutación:</h4>
                        <p>Todos nuestros sistemas son tolerantes a las fallas de un solo nodo en tiempos de inactividad inferiores a 3 segundos.</p>
                        <h4>5. Seguridad de datos:</h4>
                        <p>Existen dos réplicas de los datos de usuarios.</p>
                        <h3>C. Seguridad de red</h3>
                        <h4>1. Comprobación:</h4>
                        <p>La funcionalidad del sistema y los cambios de diseño se comprueban en un entorno de pruebas aislado "Sandbox" y se someten a una prueba funcional y de seguridad antes de su uso en sistemas de producción activos.</p>
                        <h4>2. Firewalls:</h4>
                        <p>Los firwalla restringen el acceso a todos los puertos excepto a 80 (http), 443 (https).</p>
                        <h4>3. Control de acceso:</h4>
                        <p>El acceso basado en funciones se aplica para la gestión del sistema por parte de personal de ingeniería autorizado.</p>
                        <h4>4. Cifrado durante la transmisión:</h4>
                        <p>La communicación con la página web de Record Evolution se establece a través de conexiones TLS que protegen la comunicación a través de la autenticación del servidor y el cifrado de datos. Esto garantiza que los datos del usuario estén seguros, protegidos y accesibles sólo a los destinatarios previstos durante la transmisión. Nuestros puntos finales de aplicación son sólo TLS y están clasificados como "A" en las pruebas de los laboratorios SSL. También usamos Forward Secrecy y sólo soportamos encriptación fuerte para más privacidad y seguridad.</p>
                        <h3>C. administración de vulnerabilidades</h3>
                        <h4>Patches:</h4>
                        <p>Los últimos patches de seguridad se aplican a todos los sistemas operativos, aplicaciones e infraestructuras de red para minimizar el riesgo de vulnerabilidades.</p>
                        <h3>D. Seguridad organizativa y administrativa</h3>
                        <h4>1. Evaluación de empleados:</h4>
                        <p>
                            Llevamos a cabo investigaciones de antecedentes de todos los empleados de acuerdo con las leyes locales. El personal de Record Evolution nunca tiene acceso a cuentas privadas a menos que sea necesario por razones de soporte. El personal de soporte puede iniciar sesión en su cuenta para acceder a la configuración de su problema de soporte. En raras ocasiones, los empleados pueden verse obligados a hacer una copia de sus datos sólo con su consentimiento. Cuando manejamos un problema de soporte, hacemos todo lo posible para proteger su privacidad tanto como sea posible, sólo accediendo a los datos y configuraciones necesarias para resolver su problema. Todos los módulos de datos copiados se eliminarán tan pronto como se resuelva el problema de soporte.
                        </p>
                        <h4>2. Entrenamiento:</h4>
                        <p>Ofrecemos formación a los empleados sobre seguridad y despliegue de tecnología.</p>
                        <h4>3. Proveedor de servicios:</h4>
                        <p>Revisamos a nuestros proveedores de servicios y los vinculamos contractualmente a las obligaciones apropiadas de confidencialidad y seguridad.</p>
                        <h3>E. Prácticas de desarrollo de software</h3>
                        <h4>1. Prácticas para programar:</h4>
                        <p>Nuestros desarrolladores utilizan las mejores prácticas y políticas de codificación seguras y estándar del sector.</p>
                        <h4>2. Despliegue:</h4>
                        <p>Actualizamos nuestro código contínuamente para poder reaccionar de forma rápida, si encontramos un error o un punto débil en nuestro código.</p>
                        <h3>F. Conformidad y certificaciones</h3>
                        <p>Todos los datos de pago se transmiten a través de una conexión segura (Secure Socket Layer SSL) y se almacenan de acuerdo con PCI DSS (Payment Card Industry Data Security Standards). 3.1.</p>
                        <h3>G. Tratamiento de las violaciones de seguridad</h3>
                        <p>A pesar de todos los esfuerzos, ningún método de transmisión por Internet y ningún método de almacenamiento electrónico es completamente seguro. No podemos garantizar una seguridad absoluta. No obstante, si Record Evolution tiene conocimiento de una violación de la seguridad, se lo notificaremos a los usuarios afectados para que puedan tomar las medidas de protección adecuadas. Nuestros procedimientos para reportar el incumplimiento son consistentes con las reglas o estándares de la industria que cumplimos. Los procedimientos de notificación incluyen el envío de notificaciones por correo electrónico o la publicación de una notificación en nuestro sitio web cuando se ha producido una infracción.</p>
                        <h3>H. Sus responsabilidades</h3>
                        <p>La seguridad de sus datos también depende de si usted garantiza la seguridad de su cuenta utilizando contraseñas suficientemente complicadas y almacenándolas de forma segura. También debe asegurarse de que tiene suficiente seguridad en sus propios sistemas para proteger de miradas indiscretas cualquier dato de usuario que descargue a su propio ordenador.</p>
                        <h3>I. Seguridad de la tarjeta de crédito</h3>
                        <p>Cuando usted se registra para una cuenta pagada en Record Evolution, no almacenamos la información de su tarjeta en nuestros servidores. Se transfiere a Stripe Payment Solutions, una empresa dedicada a almacenar sus datos confidenciales en servidores compatibles con PCI.</p>
                        <p>Contáctenos</p>
                        <p>
                            ¿Tiene alguna pregunta, preocupación o comentario sobre la seguridad de Record Evolution? Póngase en contacto con nosotros por correo electrónico
                            <span class="email"><a href="mailto:contact@record-evolution.de?subject=Conectarse con Record Evolution&body=Hola">contact@record-evolution.de</a></span>
                        </p>
                    </p>
                </div>`
}