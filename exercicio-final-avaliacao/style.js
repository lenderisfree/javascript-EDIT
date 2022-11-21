
        //variaveis
        let header = document.createElement('header');
        let navBar = document.createElement('nav');
        let main = document.createElement('main')
        let mainContent = document.createElement('section');
        let mainContentNone = document.createElement('section')
        let carousel = document.createElement('section');
        let newDiv = document.createElement('div');
        let footer = document.createElement('footer');

       
       


        //header 
        
        document.body.appendChild(header);
        let text = document.createElement('h2')
        text.appendChild(document.createTextNode('AnimeFLIX'))
        header.appendChild(text)

        header.appendChild(navBar);

        let listOne = document.createElement('a')
        listOne.appendChild(document.createTextNode('Action'))
        navBar.appendChild(listOne);

        let listTwo = document.createElement('a')
        listTwo.appendChild(document.createTextNode('Adventure'))
        navBar.appendChild(listTwo);

        let listThree = document.createElement('a')
        listThree.appendChild(document.createTextNode('Comedy'))
        navBar.appendChild(listThree);

        let listFour = document.createElement('a')
        listFour.appendChild(document.createTextNode('Drama'))
        navBar.appendChild(listFour);

        let listFive = document.createElement('a')
        listFive.appendChild(document.createTextNode('Romance'))
        navBar.appendChild(listFive);
        

        //main content

        document.body.appendChild(main);
        
        document.body.appendChild(mainContent);
        mainContent.setAttribute('id', 'containerOne');
        main.append(mainContent);

        document.body.appendChild(mainContentNone);
        mainContentNone.setAttribute('id', 'containerTwo');
        main.append(mainContentNone);   

        document.body.appendChild(carousel);
        carousel.setAttribute('id', 'carousel')
        main.append(carousel);
        
       
       
        
        // footer
        
        document.body.appendChild(footer);
        footer.setAttribute('id', 'footerContent')
        
        const dataAtual = new Date();
        const anoAtual = dataAtual.getFullYear();
        console.log(anoAtual);
        footer.appendChild(document.createTextNode(` ${anoAtual}©️ Site desenvolvido por Alex Almeida | Full Stack EDIT`))

        
        //acesso a API
        fetch('https://api.jikan.moe/v4/top/anime')
        .then(response => response.json())
        .then(dados =>
        dados.data.forEach(element => {

            
            const newDiv = document.createElement('div')  //criar a div que vai armazenar minha imagem e o title.
            newDiv.setAttribute('class', 'divContent')
            mainContent.append(newDiv);

            const title = document.createElement('p')  //criar o paragrafo com o title.
            const textTitle = document.createTextNode(element.title)
            title.append(textTitle)
            newDiv.appendChild(title)

            const newImage = document.createElement('img')  //criar a imagem com a imagem do anime
            newImage.setAttribute('src', element.images.jpg.image_url)
            newImage.style.width ='180px'
            newImage.style.height ='230px'
            newDiv.appendChild(newImage);

            
            // função criada para trazer evento onclick.

            newImage.onclick = () =>{
              
              
              const showContainer = document.querySelector('#containerTwo')
              showContainer.style.display = 'flex'

              const titleContainer = document.createElement('p')  //criar o paragrafo com o title.
              const textTitleContainer = document.createTextNode(element.titleContainer)
              titleContainer.append(textTitleContainer)
              showContainer.appendChild(titleContainer)

              const newImageContainer = document.createElement('img')  //criar a imagem com a imagem do anime
              newImageContainer.setAttribute('src', element.images.jpg.image_url)
              newImageContainer.style.width ='180px'
              newImageContainer.style.height ='230px'
              showContainer.appendChild(newImageContainer);
 
              const rating = document.createElement('p');  //criar o paragrafo com o rating.
              const textRating = document.createTextNode('Rating: ' + element.rating);
              rating.append(textRating);
              showContainer.appendChild(rating);    


              const year = document.createElement('p')  //criar o paragrafo com o ano.
              const textYear = document.createTextNode('Year: ' + element.year);
              year.append(textYear);
              showContainer.appendChild(year) ;  

              const genres = document.createElement('p')  //criar o paragrafo com o episodes.
              const textGenres = document.createTextNode('Episodes: ' + element.episodes);
              genres.append(textGenres);
              showContainer.appendChild(genres) ;

              const duration = document.createElement('p')  //criar o paragrafo com a duration.
              const textDuration = document.createTextNode('Duration: ' + element.duration);
              duration.append(textDuration);
              showContainer.appendChild(duration) ;

              const buttonBack = document.createElement('button');
              const buttonText = document.createTextNode('Voltar')
              buttonBack.setAttribute('class', 'buttonBack' )
              buttonBack.append(buttonText);
              showContainer.appendChild(buttonBack);


              //Para ativar o botão de voltar e mostrar novamente a grelha completa

              buttonBack.onclick = () =>{
                var del = document.getElementById('containerTwo');
                del.outerHTML = '';
              }
             

             // Para ativar o modal
              
              newImageContainer.onclick = () =>{
                const modalOn = document.createElement('div');
                const imgModal = document.createElement('img');
                const closeModal = document.createElement('button'); //criar botão para fechar modal
                closeModal.setAttribute('class', 'closeModal'); //criar botão para fechar modal
                const closeModalText = document.createTextNode('back'); //criar botão para fechar modal
                modalOn.setAttribute('id', 'modal')
                imgModal.setAttribute('class', 'imgModal')
                imgModal.setAttribute('src', element.images.jpg.image_url)
                main.append(modalOn)
                modalOn.append(imgModal);
                modalOn.append(closeModal);
                closeModal.append(closeModalText)

                const bodyScroll = document.querySelector('body')
                bodyScroll.style.overflow = 'hidden';
        
                closeModal.onclick = () =>{
                  bodyScroll.style.overflow = 'auto';
                  const returnGrid = document.querySelector('#modal')
                  returnGrid.outerHTML = '';
                  

                }
              }
            }

          }) 
        )