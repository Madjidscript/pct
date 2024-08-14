const { request } = require("express");
const otherPubliciter = require("../other/publiciter");
const otherArtisan = require("../other/artisan");
const otherAdmin = require("../other/admin");
const otherReclamation1 = require("../other/reclamation1");
const otherReclamation2 = require("../other/reclamation2");
const bcrypt = require("bcryptjs");
const path = require("path/win32");
const XLSX = require("xlsx");
const crypto = require("crypto");
 const imagess = "https://utfs.io/f/09002aae-baa5-4860-87fc-5e4502ffcc49-1t0kxp";
const utapi = require("../middlewares/uploadthind");
const { File } = require("node:buffer");

const ControlerAdmin = class {
  static Inscription = async (req = request, res = response) => {
    console.log("mon image dedy", req.file);
    let message = "";
   
    const email = await req.body.email;
    const password = await req.body.password;
    console.log("typefile : ", typeof req.file, req instanceof File);
    const response = await utapi.uploadFiles(new File([req.file.buffer], "salut"));
    if (response.error) {
      console.log("error", response.error);
    }
    const images = response.data.url;
    console.log("levrai imagessss", images);
    const verifmail = await otherAdmin.utilisateurParEmail(email);
    if (verifmail) {
      message = "l'email existe deja";
      res.json(message);
    } else {
      const haspass = await bcrypt.hash(password, 10);
      console.log("mon password hashe", haspass);
      const data = {
        ...req.body,
        password: haspass,
        image: images,
      };
      console.log("mon data", data);
      const insert = await otherAdmin.inscription(data);
      if (insert) {
        message = "inscription valider";
        res.json(message);
      }
    }
  };

  static Connexion = async (req = request, res = response) => {
    let message = "";
    console.log("ma connexion", req.body);
    const email = await req.body.email;
    const passwords = await req.body.password;
    const verifmail = await otherAdmin.utilisateurParEmail(email);

    if (!verifmail) {
      message = "email incorrect";
      res.json(message);
    } else {
      const verifpass = await bcrypt.compare(passwords, verifmail.password);
      if (verifpass) {
        const { password: pwd, ...data } = verifmail;
        message = "connexion reussit";
        console.log("mon data hoo", data);
        res.json({ data, message });
      } else {
        message = "mot de pass incorrect";
        res.json(message);
      }
    }
  };

  static AfficheAdminId = async (req = request, res = response) => {
    const id = req.params.id;
    console.log("mon id");
    let message = "";
    const Admin = await otherAdmin.utilisarteuParID(id);
    if (Admin) {
      message = "recuperation reussit";
      console.log("ma recuperation", Admin);
      res.json({ Admin, message });
    } else {
      message = "recuperation echouer";
      res.json(message);
    }
  };
  static Publiciter = async (req = request, res = response) => {
    let message = "";
    console.log("realisation artisan", req.body, "monimage", req.file);

    console.log("typefile : ", typeof req.file, req instanceof File);
    const response = await utapi.uploadFiles(new File([req.file.buffer], "salut"));
    if (response.error) {
      console.log("error", response.error);
    }
    const images = response.data.url;
    console.log("levrai imagessss", images);

    const data = {
      ...req.body,
      image: images,
    };

    const realisation = await otherPubliciter.inscription(data);
    console.log("ma realisation", realisation);
    message = "realisation effectuer";
    res.json({ realisation, message });
  };

  static GetPubliciter = async (req = request, res = response) => {
    let message = "";
    const recup = await otherPubliciter.afficheTout();
    // console.log("ma recupertion ....",recup)
    if (recup) {
      message = "reclation client recuperer";
      res.json({ recup, message });
    } else {
      message = "reclamation client client pas recuperer";
      res.json({ message });
    }
  };

  static supp = async (req = request, res = response) => {
    let message = "";
    const id = req.params.id;

    const supprimer = await otherPubliciter.suppression(id);
    if (supprimer) {
      message = "suppression de realisation valider";
      res.json({ message });
    } else {
      message = "suppresion d'image echouer";
      res.json({ message });
    }
  };
  static suppArtisan = async (req = request, res = response) => {
    let message = "";
    const id = req.params.id;

    const supprimer = await otherArtisan.suppression(id);
    if (supprimer) {
      message = "suppression de realisation valider";
      res.json({ message });
    } else {
      message = "suppresion d'image echouer";
      res.json({ message });
    }
  };
  static suppMessageArtisan = async (req = request, res = response) => {
    let message = "";
    const id = req.params.id;

    const supprimer = await otherReclamation2.suppression(id);
    if (supprimer) {
      message = "suppression de realisation valider";
      res.json({ message });
    } else {
      message = "suppresion d'image echouer";
      res.json({ message });
    }
  };
  static suppMessageClient = async (req = request, res = response) => {
    let message = "";
    const id = req.params.id;

    const supprimer = await otherReclamation1.suppression(id);
    if (supprimer) {
      message = "suppression de realisation valider";
      res.json({ message });
    } else {
      message = "suppresion d'image echouer";
      res.json({ message });
    }
  };
  static ModifStatut = async (req = request, res = response) => {
    let message = "";
    const id = req.params.id;

    const artisan = await otherArtisan.utilisarteuParID(id);
    if (artisan) {
      const nouveauStatut = !artisan.statut;
      artisan.statut = nouveauStatut;
      const modif = otherArtisan.update(id, artisan);
      console.log("la modication bien .....", modif);
      message = "statut changer";
      res.json({ modif, message });
    } else {
      message = "erreur lor de la modification";
      res.json({ message });
    }
  };

  static edditer = async (req = request, res = response) => {
    const id = req.params.id;
    console.log("mon id", id, "mon body", req.body);
    console.log("typefile : ", typeof req.file, req instanceof File);
    const response = await utapi.uploadFiles(new File([req.file.buffer], "salut"));
    if (response.error) {
      console.log("error", response.error);
    }
    const images = response.data.url;
    console.log("levrai imagessss", images);

    try {
      // Récupérer l'artisan existant depuis la base de données
      const Admin = await otherAdmin.utilisarteuParID(id);

      if (!Admin) {
        return res.status(404).json({ message: "Admin non trouvé" });
      }

      // Vérifier si le champ 'password' est modifié
      let passwords = req.body.password;
      let hspass = Admin.password; // Utiliser le mot de passe existant par défaut

      if (passwords && passwords !== Admin.password) {
        // Recrypter le nouveau mot de passe s'il est modifié
        hspass = await bcrypt.hash(passwords, 10);
      }

      // Construire les données à mettre à jour
      const data = {
        ...req.body,
        image: images ? images : Admin.image, // Utiliser la nouvelle image ou l'image existante
        password: hspass, // Utiliser le mot de passe recrypté ou existant
      };

      // Effectuer la mise à jour
      const modif = await otherAdmin.update(id, data);

      if (modif) {
        const message = "Modification effectuée avec succès";
        res.json({ message });
      } else {
        const message = "Erreur de modification des données";
        res.status(400).json({ message });
      }
    } catch (error) {
      console.error("Erreur lors de la modification", error);
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  };

  static fichier = async (req = request, res = response) => {
    
    // console.log("typefile : ", typeof req.file, req instanceof File);
    // const response = await utapi.uploadFiles(new File([req.file.buffer], "salut"));
    // if (response.error) {
    //   console.log("error", response.error);
    // }
    //const images = response.data.url;
    // console.log("levrai imagessss", images);

    const generatePassword = () => crypto.randomBytes(8).toString("hex");
    const generateUsername = (name) =>
      name
        ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        : "DefaultUser";

    try {
      const workbook = XLSX.readFile(req.file.path);
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);

      for (const row of data) {
        const {
          nom,
          tel,
          whathsapps,
          email,
          experience,
          metier,
          heure,
          heure2,
          commune,
          commune2,
          villes,
          villes2,
          latitude,
          longitude,
        } = row;

        function cleanString(value) {
          return value ? value.replace(/^\d+\.\s*/, "") : ""; // Supprime les nombres et points au début
        }

        // Gérer les valeurs par défaut et conditions
        const emailValue =
          email ||
          (nom
            ? `${nom.toLowerCase().replace(/\s+/g, "")}@gmail.com`
            : "default@example.com");
        const password = generatePassword();
        const hashpass = await bcrypt.hash(password, 10);
        const nomUtilisateur = generateUsername(nom);

        // Gestion des champs 'commune' et 'ville'
        const communeValue =
          commune === "Autre (Préciser)" ? commune2 : commune;
        const villeValue = villes === "Autre (Préciser)" ? villes2 : villes;
        const heureValue = heure === "Autre (Préciser)" ? heure2 : heure;
        const entreprises = `${nom} ${cleanString(metier)} `;
        const tels = tel ? `+225 0${tel}` : "pas de numero telephone";
        const what = whathsapps
          ? `+225 0${whathsapps}`
          : "pas connecter sur whatsapp";
        const met = cleanString(metier).trim();
        // Créer un nouvel utilisateur
        const data2 = {
          nom,
          email: emailValue,
          password: hashpass,
          metier: met,
          entreprise: cleanString(entreprises), // Nettoyer les données d'entreprise si nécessaire
          experience: cleanString(experience),
          ville: cleanString(villeValue), // Utilisation de la valeur conditionnelle nettoyée
          commune: cleanString(communeValue), // Utilisation de la valeur conditionnelle nettoyée
          quartier: cleanString(communeValue), // Nettoyer quartierValue
          longitude: longitude || 0, // Assurez-vous que 'longitude' est défini ou mettez une valeur par défaut
          tel: tels,
          whatsapp: what, // Corriger la faute de frappe
          altitude: latitude || 0, // Assurez-vous que 'latitude' est défini ou mettez une valeur par défaut
          ouverture: cleanString(heureValue),
          fermeture: cleanString(heureValue),
          image: imagess,
          utilisateur: nomUtilisateur,
          statut: true,
        };
        console.log("mon data2", data2);

        const post = await otherArtisan.inscription(data2);
      }
      res.status(200).json({ message: "Data importation reuissit" });
    } catch (error) {
      console.error(error);
      if (!res.headersSent) {
        // Vérifiez si les en-têtes ont déjà été envoyés
        res
          .status(500)
          .json({ message: "Erreur lors de l'importation des données" });
      }
    }
  };
};

module.exports = ControlerAdmin;
