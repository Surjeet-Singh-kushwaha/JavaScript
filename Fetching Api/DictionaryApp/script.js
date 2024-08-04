document.getElementById('btn').addEventListener('click', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    let inputValue = document.getElementById('in').value;
    testData(inputValue);

});


// *************************************************************************************
// testing my function
async function testData(word) {
    // Create container div
    let container = document.createElement('div');
    container.classList.add('container');


    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    console.log("Getting Data")
    let response = await fetch(url);
    console.log(response)
    if (response.status == 200) {
        let data = await response.json();
        console.log(data)
        // word meaning and phonetics part of speech***************************************
        // Create word box div
        let wordBox = document.createElement('div');
        wordBox.classList.add('word-box');

        // Create meaning div
        let meaningDiv = document.createElement('div');
        meaningDiv.classList.add('meaning');
        let h5wordMeaning = document.createElement("h5");
        h5wordMeaning.innerText = "Word Meaning";
        meaningDiv.appendChild(h5wordMeaning);
        // Create synonyms box div
        let synonymsBox = document.createElement('div');
        synonymsBox.classList.add('synonyms-box');
        // Create antonyms box div
        let antonymsBox = document.createElement('div');
        antonymsBox.classList.add('synonyms-box');
        console.log(data[0])
        //    console.log(data[0].word)
        //    console.log(data[0].phonetic)
        //    console.log(data[0].phonetics[2].audio)
        let hword = document.createElement("h5")
        hword.innerText = (data[0].word).toUpperCase();
        wordBox.appendChild(hword);
        let audiotag = document.createElement("audio");
        for(let audio of data[0].phonetics){
            if(audio.audio){
                audiotag.src = audio.audio;
                break;
            }
        }
      
       
        audiotag.controls = true;
        wordBox.appendChild(audiotag);
        let posbox = document.createElement("div");
        posbox.classList.add("pos-box");
        let posheading = document.createElement("h5");
        posheading.innerText = "Part Of Speech";
        posbox.appendChild(posheading);

        let mean = data[0].meanings;
        for (let pos of mean) {
            console.log(pos.partOfSpeech);
            let pospara = document.createElement("p");
            pospara.innerHTML = pos.partOfSpeech+ "<br>";
            posbox.appendChild(pospara);

            //    for definiton **********************


            let definations = pos.definitions
            console.log(definations)
            for (let def of definations) {
                console.log(def.definition)
                let defpara = document.createElement("p");
                defpara.innerHTML = def.definition+"<br> <br>";
                meaningDiv.appendChild(defpara);
            }

            // synonyms are ****************
            let synonyms = pos.synonyms;
            if (synonyms.length != 0) {
                console.log("Synonyms are")
                console.log(synonyms.toString())
                let synheading = document.createElement("h5")
                synheading.innerText = "Synonyms";
                synonymsBox.appendChild(synheading);
                let synonymsPara = document.createElement("p");
                synonymsPara.innerText = synonyms.toString();

                synonymsBox.appendChild(synonymsPara);
            }

            //  Antonyms 
            let antonyms = pos.antonyms;
            if (antonyms.length != 0) {
                console.log("Antonyms are ")
                console.log(antonyms.toString())
                let antheading = document.createElement("h5");
                antheading.innerText = "Antonyms"
                antonymsBox.appendChild(antheading);
                let antpara = document.createElement("p");
                antpara.innerText = antonyms.toString();
                antonymsBox.appendChild(antpara);

            }

          
        }
        container.appendChild(wordBox);
        container.appendChild(posbox);
        container.appendChild(meaningDiv)
        container.appendChild(synonymsBox)
        container.appendChild(antonymsBox)

        let copy_btn = document.createElement( 'button' );
        copy_btn.classList.add('copy-btn');
        copy_btn.innerHTML = 'Copy';
        // Add the button's functionality
        container.appendChild(copy_btn);
        copy_btn.addEventListener('click', () => {
            console.log("text Copy")
            navigator.clipboard.writeText(textToCopy.innerText).then(() => {
              alert('Text copied to clipboard');
            }).catch(() => {
              alert('Unable to copy text to clipboard');
            });
          });
    }
    else {
        console.log("Some error occur")
        container.innerText = word + " not found! please check spelling mistake"
    }


    document.body.appendChild(container);
}

const copyBtn = document.querySelector('.copy-btn');
// const textToCopy = document.querySelector('.meaning h5'); // Change this selector based on the actual element you want to copy

