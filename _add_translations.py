import json
import os

locales_dir = r"d:\MoadBus\temp-think4ever-doc\assets\locales"

translations = {
    "en": {
        "dev_intro": {
            "title": "Introduction",
            "description": "Build complete applications from concept to deployment with an intelligent, agent-driven platform. Design, develop, test, secure, and launch—all in one place—while maintaining full human oversight at every stage."
        },
        "dev_features": {
            "title": "Key Features",
            "f1": {"title": "Design Before Code", "desc": "Plan your application thoroughly before writing a single line of code. Define the UI, system architecture, and functional specifications upfront to ensure a clear development roadmap and reduce costly iterations later."},
            "f2": {"title": "Voice & Chat Driven", "desc": "Interact with intelligent AI agents using natural voice or text commands. Build, modify, and refine your app in real time, making development intuitive, fast, and accessible even without deep programming expertise."},
            "f3": {"title": "Post-Deployment Agents", "desc": "Your AI assistants don't stop working when your app goes live. Continuously monitor, optimize, and enhance your application after deployment, ensuring it evolves alongside user needs and market trends."},
            "f4": {"title": "Human Oversight", "desc": "Maintain full control throughout the development lifecycle. Review every decision, approve updates, and guide the AI, combining automation with human judgment for reliable and high-quality results."}
        }
    },
    "es": {
        "dev_intro": {
            "title": "Introducción",
            "description": "Construya aplicaciones completas desde el concepto hasta el despliegue con una plataforma inteligente basada en agentes. Diseñe, desarrolle, pruebe, asegure y lance todo en un solo lugar, manteniendo una supervisión humana total en cada etapa."
        },
        "dev_features": {
            "title": "Características Principales",
            "f1": {"title": "Diseño Antes Que Código", "desc": "Planifique su aplicación a fondo antes de escribir una sola línea de código. Defina la interfaz de usuario, la arquitectura del sistema y las especificaciones funcionales por adelantado para asegurar una hoja de ruta de desarrollo clara y reducir iteraciones costosas más adelante."},
            "f2": {"title": "Impulsado por Voz y Chat", "desc": "Interactúe con agentes de IA inteligentes utilizando comandos de voz o texto naturales. Construya, modifique y refine su aplicación en tiempo real, haciendo que el desarrollo sea intuitivo, rápido y accesible incluso sin profunda experiencia en programación."},
            "f3": {"title": "Agentes Post-Despliegue", "desc": "Sus asistentes de IA no dejan de funcionar cuando su aplicación se pone en marcha. Monitoree, optimice y mejore continuamente su aplicación después del despliegue, asegurando que evolucione junto con las necesidades del usuario y las tendencias del mercado."},
            "f4": {"title": "Supervisión Humana", "desc": "Mantenga un control total durante todo el ciclo de vida de desarrollo. Revise cada decisión, apruebe actualizaciones y guíe a la IA, combinando la automatización con el juicio humano para obtener resultados confiables y de alta calidad."}
        }
    },
    "fr": {
        "dev_intro": {
            "title": "Introduction",
            "description": "Créez des applications complètes du concept au déploiement avec une plateforme intelligente dirigée par des agents. Concevez, développez, testez, sécurisez et lancez - le tout en un seul endroit - tout en maintenant une supervision humaine complète à chaque étape."
        },
        "dev_features": {
            "title": "Caractéristiques Principales",
            "f1": {"title": "Conception Avant Code", "desc": "Planifiez minutieusement votre application avant d'écrire une seule ligne de code. Définissez l'interface utilisateur, l'architecture du système et les spécifications fonctionnelles à l'avance pour garantir une feuille de route de développement claire et réduire les itérations coûteuses ultérieurement."},
            "f2": {"title": "Piloté par la Voix et le Chat", "desc": "Interagissez avec des agents IA intelligents à l'aide de commandes vocales ou textuelles naturelles. Construisez, modifiez et affinez votre application en temps réel, rendant le développement intuitif, rapide et accessible même sans expertise approfondie en programmation."},
            "f3": {"title": "Agents Post-Déploiement", "desc": "Vos assistants IA ne s'arrêtent pas de fonctionner lorsque votre application est mise en ligne. Surveillez, optimisez et améliorez continuellement votre application après le déploiement, en veillant à ce qu'elle évolue en fonction des besoins des utilisateurs et des tendances du marché."},
            "f4": {"title": "Supervision Humaine", "desc": "Gardez le contrôle total tout au long du cycle de vie du développement. Révisez chaque décision, approuvez les mises à jour et guidez l'IA, en combinant l'automatisation avec le jugement humain pour des résultats fiables et de haute qualité."}
        }
    },
    "it": {
        "dev_intro": {
            "title": "Introduzione",
            "description": "Crea applicazioni complete dal concetto alla distribuzione con una piattaforma intelligente basata su agenti. Progetta, sviluppa, testa, proteggi e lancia—tutto in un unico posto—mantenendo una supervisione umana completa in ogni fase."
        },
        "dev_features": {
            "title": "Caratteristiche Principali",
            "f1": {"title": "Progettazione Prima del Codice", "desc": "Pianifica la tua applicazione in modo approfondito prima di scrivere una singola riga di codice. Definisci l'interfaccia utente, l'architettura di sistema e le specifiche funzionali in anticipo per garantire una road map di sviluppo chiara e ridurre costose iterazioni successive."},
            "f2": {"title": "Guidato da Voce e Chat", "desc": "Interagisci con agenti IA intelligenti utilizzando comandi vocali o testuali naturali. Crea, modifica e perfeziona la tua app in tempo reale, rendendo lo sviluppo intuitivo, veloce e accessibile anche senza profonde competenze di programmazione."},
            "f3": {"title": "Agenti Post-Distribuzione", "desc": "I tuoi assistenti IA non smettono di lavorare quando la tua app va live. Monitora, ottimizza e migliora continuamente l'applicazione dopo la distribuzione, assicurandoti che si evolva insieme alle esigenze degli utenti e alle tendenze del mercato."},
            "f4": {"title": "Supervisione Umana", "desc": "Mantieni il pieno controllo per l'intero ciclo di vita dello sviluppo. Esamina ogni decisione, approva gli aggiornamenti e guida l'IA, combinando l'automazione con il giudizio umano per risultati affidabili e di alta qualità."}
        }
    },
    "nl": {
        "dev_intro": {
            "title": "Introductie",
            "description": "Bouw volledige applicaties van concept tot implementatie met een intelligent, op agenten gebaseerd platform. Ontwerp, ontwikkel, test, beveilig en lanceer—alles op één plek—met behoud van volledig menselijk toezicht in elke fase."
        },
        "dev_features": {
            "title": "Belangrijkste Kenmerken",
            "f1": {"title": "Ontwerp Voor Code", "desc": "Plan uw applicatie grondig voordat u een enkele regel code schrijft. Bepaal de UI, de systeemarchitectuur en functionele specificaties vooraf om een duidelijke ontwikkelroadmap te garanderen en dure iteraties later te verminderen."},
            "f2": {"title": "Spraak & Chat Gestuurd", "desc": "Communiceer met intelligente AI-agenten met behulp van natuurlijke spraak- of tekstcommando's. Bouw, wijzig en verfijn uw app in realtime, waardoor ontwikkeling intuïtief, snel en toegankelijk wordt, zelfs zonder diepgaande programmeerkennis."},
            "f3": {"title": "Post-Deployment Agenten", "desc": "Uw AI-assistenten stoppen niet met werken zodra uw app live gaat. Blijf uw applicatie continu volgen, optimaliseren en verbeteren na implementatie, zodat deze meegroeit met de behoeften van de gebruiker en markttrends."},
            "f4": {"title": "Menselijk Toezicht", "desc": "Behoud volledige controle gedurende de hele levenscyclus van de ontwikkeling. Controleer elke beslissing, keur updates goed en begeleid de AI, door automatisering te combineren met menselijk oordeel voor betrouwbare en hoogwaardige resultaten."}
        }
    }
}

for lang, content_keys in translations.items():
    file_path = os.path.join(locales_dir, f"{lang}.json")
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            try:
                data = json.load(f)
            except Exception as e:
                print(f"Error parsing {file_path}: {e}")
                continue
        
        data["dev_intro"] = content_keys["dev_intro"]
        data["dev_features"] = content_keys["dev_features"]
        
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"Updated {lang}.json successfully")
    else:
        print(f"{file_path} not found")

