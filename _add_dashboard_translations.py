import json
import os

locales_dir = r"d:\MoadBus\temp-think4ever-doc\assets\locales"

translations = {
    "en": {
        "dev_dashboard": {
            "title": "Dashboard",
            "intro": "This dashboard provides a clear, organized view of all your projects in one place. Key features include:",
            "f1_title": "Project Overview:",
            "f1_desc": "Each project is displayed as a card showing the project name and a brief description. This allows for quick recognition and easy access.",
            "f2_title": "Search Functionality:",
            "f2_desc": "A search bar at the top lets you find projects quickly by name.",
            "f3_title": "Create & Manage Projects:",
            "f3_desc": "Easily start a new project with the \"Create New Project\" button or log out with a single click.",
            "f4_title": "Project Navigation:",
            "f4_desc": "Clicking on a project card takes you directly to that project's workspace for further management and development.",
            "f5_title": "Clean & Minimal Layout:",
            "f5_desc": "The interface is simple and intuitive, focusing on productivity without distractions.",
            "f6_title": "Project Count Indicator:",
            "f6_desc": "Displays the total number of projects at the bottom right, helping users track their workload.",
            "outro": "This dashboard acts as a central hub for managing, accessing, and launching all your ongoing projects efficiently."
        }
    },
    "es": {
        "dev_dashboard": {
            "title": "Panel de Control",
            "intro": "Este panel proporciona una vista clara y organizada de todos sus proyectos en un solo lugar. Las características clave incluyen:",
            "f1_title": "Descripción General del Proyecto:",
            "f1_desc": "Cada proyecto se muestra como una tarjeta que contiene el nombre del proyecto y una breve descripción. Esto permite un reconocimiento rápido y un acceso fácil.",
            "f2_title": "Funcionalidad de Búsqueda:",
            "f2_desc": "Una barra de búsqueda en la parte superior le permite encontrar proyectos rápidamente por su nombre.",
            "f3_title": "Crear y Gestionar Proyectos:",
            "f3_desc": "Inicie fácilmente un nuevo proyecto con el botón \"Crear Nuevo Proyecto\" o cierre sesión con un solo clic.",
            "f4_title": "Navegación de Proyectos:",
            "f4_desc": "Al hacer clic en la tarjeta del proyecto, será redirigido directamente al espacio de trabajo de ese proyecto para mayor gestión y desarrollo.",
            "f5_title": "Diseño Limpio y Minimalista:",
            "f5_desc": "La interfaz es sencilla e intuitiva, enfocándose en la productividad sin distracciones.",
            "f6_title": "Indicador de Recuento de Proyectos:",
            "f6_desc": "Muestra el número total de proyectos en la esquina inferior derecha, ayudando a los usuarios a realizar un seguimiento de su carga de trabajo.",
            "outro": "Este panel actúa como un centro principal para gestionar, acceder y ejecutar todos sus proyectos en curso de manera eficiente."
        }
    },
    "fr": {
        "dev_dashboard": {
            "title": "Tableau de Bord",
            "intro": "Ce tableau de bord offre une vue claire et organisée de tous vos projets en un seul endroit. Les caractéristiques principales incluent :",
            "f1_title": "Aperçu du Projet :",
            "f1_desc": "Chaque projet est affiché sous forme de carte montrant le nom du projet et une brève description. Cela permet une reconnaissance rapide et un accès facile.",
            "f2_title": "Fonctionnalité de Recherche :",
            "f2_desc": "Une barre de recherche en haut vous permet de trouver rapidement des projets par leur nom.",
            "f3_title": "Créer et Gérer des Projets :",
            "f3_desc": "Démarrez facilement un nouveau projet avec le bouton \"Créer un Nouveau Projet\" ou déconnectez-vous en un seul clic.",
            "f4_title": "Navigation des Projets :",
            "f4_desc": "Cliquer sur la carte d'un projet vous amène directement à l'espace de travail de ce projet pour une gestion et un développement approfondis.",
            "f5_title": "Mise en Page Propre et Minimaliste :",
            "f5_desc": "L'interface est simple et intuitive, mettant l'accent sur la productivité sans distractions.",
            "f6_title": "Indicateur du Nombre de Projets :",
            "f6_desc": "Affiche le nombre total de projets en bas à droite, aidant les utilisateurs à suivre leur charge de travail.",
            "outro": "Ce tableau de bord agit comme un hub central pour gérer, accéder et lancer tous vos projets en cours efficacement."
        }
    },
    "it": {
        "dev_dashboard": {
            "title": "Pannello di Controllo",
            "intro": "Questo pannello fornisce una visuale chiara e organizzata di tutti i tuoi progetti in un unico posto. Le funzionalità chiave includono:",
            "f1_title": "Panoramica del Progetto:",
            "f1_desc": "Ogni progetto è visualizzato come una scheda contenente il nome del progetto e una breve descrizione. Ciò permette un rapido riconoscimento e facile accesso.",
            "f2_title": "Funzionalità di Ricerca:",
            "f2_desc": "Una barra di ricerca in alto ti permette di trovare rapidamente i progetti per nome.",
            "f3_title": "Crea e Gestisci Progetti:",
            "f3_desc": "Inizia facilmente un nuovo progetto con il pulsante \"Crea Nuovo Progetto\" o disconnettiti con un solo clic.",
            "f4_title": "Navigazione del Progetto:",
            "f4_desc": "Cliccando sulla scheda di un progetto si accede direttamente allo spazio di lavoro per ulteriori sviluppi e gestioni.",
            "f5_title": "Layout Pulito e Minimale:",
            "f5_desc": "L'interfaccia è semplice e intuitiva, focalizzata sulla produttività senza distrazioni.",
            "f6_title": "Indicatore Conteggio Progetti:",
            "f6_desc": "Mostra il numero totale di progetti in basso a destra, aiutando gli utenti a tenere traccia del proprio carico di lavoro.",
            "outro": "Questo pannello funge da hub centrale per gestire, accedere e lanciare tutti i tuoi progetti attivi in modo efficiente."
        }
    },
    "nl": {
        "dev_dashboard": {
            "title": "Dashboard",
            "intro": "Dit dashboard biedt een duidelijk, georganiseerd overzicht van al uw projecten op één plek. Belangrijke kenmerken zijn:",
            "f1_title": "Projectoverzicht:",
            "f1_desc": "Elk project wordt weergegeven als een kaart met de naam en een korte beschrijving van het project. Dit zorgt voor snelle herkenning en gemakkelijke toegang.",
            "f2_title": "Zoekfunctionaliteit:",
            "f2_desc": "Met een zoekbalk bovenaan kunt u snel projecten op naam vinden.",
            "f3_title": "Maak & Beheer Projecten:",
            "f3_desc": "Start eenvoudig een nieuw project met de knop \"Nieuw Project Maken\" of log uit met één klik.",
            "f4_title": "Projectnavigatie:",
            "f4_desc": "Door op een projectkaart te klikken, gaat u rechtstreeks naar de werkruimte van dat project voor verder beheer en ontwikkeling.",
            "f5_title": "Schone & Minimale Lay-out:",
            "f5_desc": "De interface is eenvoudig en intuïtief, gericht op productiviteit zonder afleidingen.",
            "f6_title": "Indicator Aantal Projecten:",
            "f6_desc": "Toont het totale aantal projecten rechtsonder, waardoor gebruikers hun werklast kunnen bijhouden.",
            "outro": "Dit dashboard fungeert als een centrale hub voor het efficiënt beheren, openen en starten van al uw lopende projecten."
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
        
        data["dev_dashboard"] = content_keys["dev_dashboard"]
        
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"Updated {lang}.json successfully")
    else:
        print(f"{file_path} not found")
