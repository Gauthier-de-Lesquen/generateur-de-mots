        let wordType = 'other'; // Type de mot par défaut
        let p = document.getElementById("p");
        let pourfichier = "";

        function updateWordType(type) {
            wordType = type;
            console.log("Type de mot sélectionné :", wordType);
        };

        const data = {
            "a": {"1": "n", "2": "n", "3": "n", "4": "n", "5": "n", "6": "n", "7": "i", "8": "i", "9": "i", "10": "r", "11": "r", "12": "u", "13": "l", "14": "t", "15": "s"},
            "b": {"1": "o", "2": "o", "3": "o", "4": "o", "5": "o", "6": "o", "7": "l", "8": "l", "9": "l", "10": "a", "11": "a", "12": "r", "13": "e", "14": "i", "15": "u"},
            "c": {"1": "h", "2": "h", "3": "h", "4": "h", "5": "h", "6": "h", "7": "o", "8": "o", "9": "o", "10": "e", "11": "e", "12": "a", "13": "u", "14": "i", "15": "t"},
            "d": {"1": "e", "2": "e", "3": "e", "4": "e", "5": "e", "6": "e", "7": "i", "8": "i", "9": "i", "10": "a", "11": "a", "12": "u", "13": "o", "14": "é", "15": "r"},
            "e": {"1": "s", "2": "s", "3": "s", "4": "s", "5": "s", "6": "s", "7": "r", "8": "r", "9": "r", "10": "n", "11": "n", "12": "t", "13": "u", "14": "l", "15": "m"},
            "f": {"1": "a", "2": "a", "3": "a", "4": "a", "5": "a", "6": "a", "7": "o", "8": "o", "9": "o", "10": "i", "11": "i", "12": "e", "13": "r", "14": "f", "15": "l"},
            "g": {"1": "e", "2": "e", "3": "e", "4": "e", "5": "e", "6": "e", "7": "r", "8": "r", "9": "r", "10": "a", "11": "a", "12": "u", "13": "n", "14": "o", "15": "i"},
            "h": {"1": "e", "2": "e", "3": "e", "4": "e", "5": "e", "6": "e", "7": "a", "8": "a", "9": "a", "10": "o", "11": "o", "12": "i", "13": "é", "14": "u", "15": "è"},
            "i": {"1": "e", "2": "e", "3": "e", "4": "e", "5": "e", "6": "e", "7": "n", "8": "n", "9": "n", "10": "t", "11": "t", "12": "s", "13": "l", "14": "r", "15": "o"},
            "j": {"1": "o", "2": "o", "3": "o", "4": "o", "5": "o", "6": "o", "7": "e", "8": "e", "9": "e", "10": "a", "11": "a", "12": "u", "13": "i", "14": "é", "15": "è"},
            "l": {"1": "e", "2": "e", "3": "e", "4": "e", "5": "e", "6": "e", "7": "a", "8": "a", "9": "a", "10": "l", "11": "l", "12": "i", "13": "o", "14": "u", "15": "é"},
            "m": {"1": "e", "2": "e", "3": "e", "4": "e", "5": "e", "6": "e", "7": "a", "8": "a", "9": "a", "10": "o", "11": "o", "12": "i", "13": "p", "14": "m", "15": "é"},
            "n": {"1": "e", "2": "e", "3": "e", "4": "e", "5": "e", "6": "e", "7": "s", "8": "s", "9": "s", "10": "n", "11": "n", "12": "a", "13": "a", "14": "i", "15": "t"},
            "o": {"1": "n", "2": "n", "3": "n", "4": "n", "5": "n", "6": "n", "7": "u", "8": "u", "9": "u", "10": "r", "11": "r", "12": "i", "13": "m", "14": "l", "15": "s"},
            "p": {"1": "a", "2": "a", "3": "a", "4": "a", "5": "a", "6": "a", "7": "o", "8": "o", "9": "o", "10": "e", "11": "e", "12": "r", "13": "l", "14": "i", "15": "p"},
            "q": {"1": "u", "2": "u", "3": "u", "4": "u", "5": "u", "6": "u", "7": "u", "8": "u", "9": "u", "10": "u", "11": "u", "12": "u", "13": "u", "14": "û", "15": "û"},
            "r": {"1": "e", "2": "e", "3": "e", "4": "e", "5": "e", "6": "e", "7": "i", "8": "i", "9": "i", "10": "a", "11": "a", "12": "o", "13": "m", "14": "t", "15": "s"},
            "s": {"1": "e", "2": "e", "3": "e", "4": "e", "5": "e", "6": "e", "7": "t", "8": "t", "9": "t", "10": "i", "11": "s", "12": "s", "13": "o", "14": "a", "15": "u"},
            "t": {"1": "e", "2": "e", "3": "e", "4": "e", "5": "e", "6": "e", "7": "i", "8": "i", "9": "i", "10": "r", "11": "r", "12": "a", "13": "o", "14": "t", "15": "t"},
            "u": {"1": "r", "2": "r", "3": "r", "4": "r", "5": "r", "6": "r", "7": "i", "8": "i", "9": "i", "10": "e", "11": "e", "12": "n", "13": "s", "14": "t", "15": "n"},
            "v": {"1": "e", "2": "e", "3": "e", "4": "e", "5": "e", "6": "e", "7": "a", "8": "a", "9": "a", "10": "i", "11": "i", "12": "o", "13": "r", "14": "é", "15": "u"},
            "é": {"1": "t", "2": "t", "3": "t", "4": "t", "5": "t", "6": "t", "7": "s", "8": "s", "9": "s", "10": "r", "11": "r", "12": "c", "13": "p", "14": "g", "15": "n"}
        };


        function CreateWord() {
            const keys = Object.keys(data);
            let currentLetter = keys[Math.floor(Math.random() * keys.length)];
            let word = currentLetter;

            // Définir une longueur aléatoire entre 4 et 8 lettres
            const wordLength = Math.floor(Math.random() * 5) + 4;

            // Générer le mot en utilisant la table de transition
            for (let i = 1; i < wordLength - 1; i++) {
                const possibleNextLetters = Object.values(data[currentLetter]);
                const nextLetter = possibleNextLetters[Math.floor(Math.random() * possibleNextLetters.length)];
                word += nextLetter;
                currentLetter = nextLetter;
            }

            // Ajouter une terminaison en fonction du type de mot
            const endings = {
                nomCo: ['tion', 'age', 'ment', 'eur', 'té'],
                adj: ['al', 'if', 'eux', 'ique'],
                adv: ['ment'],
                verbe: ['er', 'ir', 'endre', 'oir'],
                other: ['tion', 'age', 'ment', 'eur', 'té', 'e', 'al', 'if', 'eux', 'ique', 'er', 'ir', 're', 'endre', 'oir'],
            };

            const selectedEndings = endings[wordType] || endings.other;
            const ending = selectedEndings[Math.floor(Math.random() * selectedEndings.length)];

            if((ending === "tion" || ending === "ment" || ending === "té") && "aeiouy".includes(word.slice(-1).toLowerCase())) {
                word += ending;
            } else if((ending === "tion" || ending === "ment" || ending === "té" || ending === "dre") && !"aeiouy".includes(word.slice(-1).toLowerCase())) {
                word += "a";
                word += ending;
            } else if ((ending === "age" || ending === "eur" || ending === "e" || ending === "al" || ending === "if" || ending === "eux" || ending === "ique" || ending === "er" || ending === "ir" || ending === "endre" || ending === "oir" ) && !"aeiouy".includes(word.slice(-1).toLowerCase())) {
                word += ending;
            } else if ((ending === "age" || ending === "eur" || ending === "e" || ending === "al" || ending === "if" || ending === "eux" || ending === "ique" || ending === "er" || ending === "ir" || ending === "endre" || ending === "oir" ) && "aeiouy".includes(word.slice(-1).toLowerCase())) {
                word += "t";
                word += ending;
            }

            if(/nn[^aeiou]/i.test(word)) {
                word = word.replace(/nn([^aeiou])/i, "nne$1");
            } else if(/ll[^aeiou]/i.test(word)) {
                word = word.replace(/ll([^aeiou])/i, "lle$1");
            } else if(/pp[^aeiou]/i.test(word)) {
                word = word.replace(/pp([^aeiou])/i, "ppe$1");
            } else if(/ss[^aeiou]/i.test(word)) {
                word = word.replace(/ss([^aeiou])/i, "sse$1");
            } else if(/mm[^aeiou]/i.test(word)) {
                word = word.replace(/mm([^aeiou])/i, "mme$1");
            } else if(/rr[^aeiou]/i.test(word)) {
                word = word.replace(/rr([^aeiou])/i, "rre$1");
            } else if(/tt[^aeiou]/i.test(word)) {
                word = word.replace(/tt([^aeiou])/i, "tte$1");
            } else if(/ff[^aeiou]/i.test(word)) {
                word = word.replace(/ff([^aeiou])/i, "ffe$1");
            } else if(/n[^acdefghijklnoqrstuvwxyz]/i.test(word)) {
                word = word.replace(/n([^acdefghijklnoqrstuvwxyz])/i, "m$1");
            } else if(/a[^iu]/i.test(word)) {
                word = word.replace(/a([^iu])/i, "a$1");
            }  else if(/e[^iu]/i.test(word)) {
                word = word.replace(/e([^iu])/i, "e$1");
            } else if(/i[^e]/i.test(word)) {
                word = word.replace(/i([^e])/i, "i$1");
            } else if(/o[^eiu]/i.test(word)) {
                word = word.replace(/o([^eiu])/i, "o$1");
            }  else if(/qu[^aeiou]/i.test(word)) {
                word = word.replace(/qu([^aeiou])/i, "qua$1");
            }

            if(word.startsWith("nn")){
                word = "n" + word.slice(2);
            } else if(word.startsWith("ll")) {
                word = "l" + word.slice(2);
            } else if(word.startsWith("pp")) {
                word = "p" + word.slice(2);
            } else if(word.startsWith("ss")) {
                word = "s" + word.slice(2);
            } else if(word.startsWith("mm")) {
                word = "m" + word.slice(2);
            } else if(word.startsWith("rr")) {
                word = "r" + word.slice(2);
            } else if(word.startsWith("tt")) {
                word = "t" + word.slice(2);
            } else if(word.startsWith("ff")) {
                word = "f" + word.slice(2);
            }

            if((word.endsWith("tion") || word.endsWith("té")) && wordType === "nomCo") {
                word = "une " + word
            } else if((word.endsWith("age") || word.endsWith("eur") || word.endsWith("ment")) && wordType === "nomCo") {
                word = "un " + word
            } else if((word.endsWith("tion") || word.endsWith("té")) && wordType === "other") {
                word = "une " + word
                p.innerText = "nature : nom commun"
            } else if((word.endsWith("age") || word.endsWith("eur")) && wordType === "other") {
                word = "un " + word
                p.innerText = "nature : nom commun"
            } else if((word.endsWith("al") || word.endsWith("if") || word.endsWith("eux") || word.endsWith("ique")) && wordType === "other") {
                p.innerText = "nature : adjectif"
            } else if((word.endsWith("er") || word.endsWith("ir") || word.endsWith("re") || word.endsWith("endre") || word.endsWith("oir")) && wordType === "other") {
                p.innerText = "nature : verbe"
            } else if(word.endsWith("ment") && wordType === "other") {
                p.innerText = "nature : adverbe"
            }

            if(wordType !== "other"){
                p.innerText = ""
            }


            // Afficher le mot
            document.getElementById("inputResultat").value = word;
            pourfichier += word + ", ";
        }
        function creerFichier() {
            const contenu = pourfichier;
            const blob = new Blob([contenu], { type: "text/plain;charset=utf-8"});
            const url = URL.createObjectURL(blob);

            const lien = document.createElement("a");
            lien.href = url;
            lien.download = "monFichier.txt";
            lien.click();

        URL.revokeObjectURL(url); // Nettoyage
      }