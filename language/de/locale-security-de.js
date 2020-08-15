languageSecurity = {
    fileFor: 'security',
    dialogHeadline: 'Sicherheitserklärung',
    dialogText: `
                <div class="wrapper layout vertical justified">
                    <p>Die Benutzer von Record Evolution haben Record Evolution mit ihren Daten vertraut, und wir legen großen Wert darauf, die Sicherheits- und Datenschutzbedenken unserer Benutzer ernst zu nehmen. Record Evolution verwendet einige der fortschrittlichsten Technologien für die Sicherheit im Internet, die heute kommerziell erhältlich sind. Diese Sicherheitserklärung soll Transparenz über unsere Sicherheitsinfrastruktur und -praktiken schaffen, um Ihnen zu versichern, dass Ihre Daten angemessen geschützt sind. Weitere Informationen zum Umgang mit Daten finden Sie in unserer Datenschutzerklärung. Record Evolution ist ein Produkt, das auf einer Google Cloud-Plattform basiert. Daher werden die meisten Sicherheitsmaßnahmen von der Google Cloud Platform bereitgestellt, diese implementieren ein umfassendes Google-Sicherheitsmodell. Diese Sicherheitserklärung beschreibt die wichtigsten Sicherheitsmaßnahmen zum Schutz Ihrer Daten. Für weitere Informationen besuchen Sie bitte<a rel="noopener" target="_blank" href="https://cloud.google.com/security/">https://cloud.google.com/security/</a></p>
                    <h3>A. Benutzersicherheit</h3>
                    <h4> 1. Authentifizierung:</h4>
                    <p>Die Benutzerdaten in unserer Datenbank sind logisch durch kontenbasierte Zugriffsregeln getrennt. Benutzerkonten haben eindeutige Benutzernamen und Passwörter, die bei jeder Anmeldung eines Benutzers eingegeben werden müssen. Record Evolution gibt ein Session-Cookie aus, um nur verschlüsselte Authentifizierungsinformationen für die Dauer einer bestimmten Session zu speichern. Der Session-Cookie enthält nicht das Passwort des Benutzers.</p>
                    <h4> 2. Passwörter:</h4>
                    <p>Passwörter für Benutzeranwendungen haben minimale Komplexitätsanforderungen. Passwörter werden gehasht und mit einem salt versehen.</p>
                    <h4> 3. Datenverschlüsselung:</h4>
                    <p>Bestimmte sensible Benutzerdaten, wie z.B. Konto-Passwörter, werden in verschlüsselter Form gespeichert. Kreditkartendaten werden nicht in unserer Datenbank gespeichert.</p>
                    <h4> 4. Datenschutz:</h4>
                    <p>Wir haben eine umfassende Datenschutzerklärung, die einen sehr transparenten Überblick darüber bietet, wie wir mit Ihren Daten umgehen, einschließlich der Art und Weise, wie wir Ihre Daten verwenden, an wen wir sie weitergeben und wie wir sie speichern, löschen und blockieren.</p>
                    <h4> 5. Datenaufbewahrung:</h4>
                    <p>Alle Benutzerdaten von Record Evolution werden auf Servern in Deutschland gespeichert.</p>
                    <h3>B. Verfügbarkeit</h3>
                    <h4>1. Konnektivität:</h4>
                    <p>Wir verwenden vollständig redundante IP-Netzwerkverbindungen mit mehreren unabhängigen Verbindungen zu einer Reihe von Tier-1-Internetzugangsanbietern.
                        <h4>2. Leistung:</h4>
                        <p>Server verfügen über redundante interne und externe Stromversorgungen sowie über Umweltkontrollen. Rechenzentren verfügen über Notstromversorgungen und sind in der Lage, Strom aus den verschiedenen Unterstationen des Netzes, mehreren Dieselgeneratoren und Backup-Batterien zu beziehen.</p>
                        <h4>3. Betriebszeit:</h4>
                        <p>Kontinuierliche Überwachung der Betriebszeit, mit sofortiger Benachrichtigungen an die Mitarbeiter von Record Evolution für eventuelle Ausfallzeiten.</p>
                        <h4>4. Ausfallsicherung:</h4>
                        <p>Alle unsere Systeme sind tolerant gegenüber Einzelknotenausfällen innerhalb von Ausfallzeiten von weniger als 3 Sekunden.</p>
                        <h4>5. Datensicherheit:</h4>
                        <p>Es gibt two Replikate aller Benutzerdaten.</p>
                        <h3>C. Netzwerksicherheit</h3>
                        <h4>1. Prüfung:</h4>
                        <p>Die Systemfunktionalität und Designänderungen werden in einer isolierten Testumgebung "Sandbox" überprüft und vor dem Einsatz in aktiven Produktionssystemen einem Funktions- und Sicherheitstest unterzogen.</p>
                        <h4>2. Firewalls:</h4>
                        <p>Firewalls beschränken den Zugriff auf alle Ports außer 80 (http), 443 (https).</p>
                        <h4>3. Zugriffskontrolle:</h4>
                        <p>Der rollenbasierte Zugriff wird für das Systemmanagement durch autorisiertes Ingenieurpersonal erzwungen.</p>
                        <h4>4. Verschlüsselung in der Übertragung:</h4>
                        <p>Die Kommunikation mit der Record Evolution Webseite erfolgt über TLS-Verbindungen, die die Kommunikation sowohl durch Serverauthentifizierung als auch durch Datenverschlüsselung schützen. Dadurch wird sichergestellt, dass die Benutzerdaten während der Übertragung sicher, geschützt und nur den vorgesehenen Empfängern zugänglich sind. Unsere Anwendungsendpunkte sind nur TLS und werden in den Tests von SSL Labs mit "A" bewertet. Wir verwenden auch Forward Secrecy und unterstützen nur starke Verschlüsselungen für mehr Privatsphäre und Sicherheit.</p>
                        <h3>C. Schwachstellen-Management</h3>
                        <h4>Patchen:</h4>
                        <p>Die neuesten Sicherheitspatches werden auf alle Betriebssysteme, Anwendungen und Netzwerkinfrastrukturen angewendet, um das Risiko von Schwachstellen zu minimieren.</p>
                        <h3>D. Organisatorische und administrative Sicherheit</h3>
                        <h4>1. Mitarbeiter-Screening:</h4>
                        <p>
                            Wir führen Hintergrund Untersuchungen an allen Mitarbeitern in Übereinstimmung mit den lokalen Gesetzen durch. Keine Mitarbeiter von Record Evolution greifen jemals auf private Konten zu, es sei denn, dies ist aus Supportgründen erforderlich. Die Supportmitarbeiter können sich in Ihrem Konto anmelden, um auf die Einstellungen für Ihr Supportproblem zuzugreifen. In seltenen Fällen müssen Mitarbeiter eine Kopie Ihres Datenpods anfertigen, dies geschieht nur mit Ihrer Zustimmung. Wenn wir ein Supportproblem bearbeiten, tun wir unser Bestes, um Ihre Privatsphäre so weit wie möglich zu schützen, wir greifen nur auf die Daten und Einstellungen zu, die zur Lösung Ihres Problems erforderlich sind. Alle kopierten Datenpods werden gelöscht, sobald das Supportproblem behoben ist.
                        </p>
                        <h4>2. Training:</h4>
                        <p>Wir bieten Schulungen für Mitarbeiter zu Sicherheit und Technologieeinsatz an.</p>
                        <h4>3. Dienstleister:</h4>
                        <p>Wir überprüfen unsere Dienstleister und binden sie vertraglich an angemessene Vertraulichkeits- und Sicherheitsverpflichtungen.</p>
                        <h3>E. Softwareentwicklungspraktiken</h3>
                        <h4>1. Praktiken zum programmieren:</h4>
                        <p>Unsere Entwickler verwenden "Best Practices" und branchenübliche, sichere Codierungsrichtlinien.</p>
                        <h4>2. Deployment:</h4>
                        <p>Wir erneuern regelmäßig unseren Code, so dass wir schnell reagieren können, wenn ein Fehler oder eine Schwachstelle in unserem Code entdeckt wird.</p>
                        <h3>F. Compliance und Zertifizierungen</h3>
                        <p>Alle Zahlungsdaten werden über eine sichere Verbindung (Secure Socket Layer-SSL) übertragen und gemäß PCI DSS (Payment Card Industry Data Security Standards) gespeichert. 3.1.</p>
                        <h3>G. Umgang mit Sicherheitsverletzungen</h3>
                        <p>Trotz aller Bemühungen ist keine Übertragungsmethode über das Internet und keine Methode der elektronischen Speicherung vollkommen sicher. Wir können keine absolute Sicherheit garantieren. Wenn Record Evolution jedoch von einem Sicherheitsverstoß erfährt, werden wir die betroffenen Benutzer benachrichtigen, damit sie geeignete Schutzmaßnahmen ergreifen können. Unsere Verfahren zur Meldung von Verstößen stehen im Einklang mit den Branchenregeln oder -standards, die wir einhalten. Zu den Benachrichtigungsverfahren gehören das Bereitstellen von E-Mail-Benachrichtigungen oder das Posten einer Benachrichtigung auf unserer Website, wenn ein Verstoß vorliegt.</p>
                        <h3>H. Ihre Verantwortlichkeiten</h3>
                        <p>Die Sicherheit Ihrer Daten hängt auch davon ab, ob Sie die Sicherheit Ihres Kontos gewährleisten, indem Sie ausreichend komplizierte Passwörter verwenden und diese sicher speichern. Sie sollten auch sicherstellen, dass Sie über ausreichende Sicherheit auf Ihren eigenen Systemen verfügen, um alle Benutzerdaten, die Sie auf Ihren eigenen Computer herunterladen, vor neugierigen Blicken zu schützen.</p>
                        <h3>I. Kreditkartensicherheit</h3>
                        <p>Wenn Sie sich für ein bezahltes Konto bei Record Evolution anmelden, speichern wir keine Ihrer Karteninformationen auf unseren Servern. Es wird an Stripe Payment Solutions übergeben, ein Unternehmen, das sich der Speicherung Ihrer sensiblen Daten auf PCI-konformen Servern verschrieben hat.</p>
                        <p>Kontaktieren Sie uns</p>
                        <p>
                            Sie haben eine Frage, ein Anliegen oder einen Kommentar zur Sicherheit von Record Evolution? Bitte kontaktieren Sie uns per E-Mail
                            <span class="email"><a href="mailto:contact@record-evolution.de?subject=Reaching out to RECORD.evolution&body=Hello">contact@record-evolution.de</a></span>
                        </p>
                    </p>
                </div>`
}