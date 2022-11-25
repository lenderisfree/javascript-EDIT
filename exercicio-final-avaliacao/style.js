
        //variaveis

        let header = document.createElement('header');
        let navBar = document.createElement('nav');
        let main = document.createElement('main')
        let mainContent = document.createElement('section');
        var mainContentNone = document.createElement('section')
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
        mainContent.setAttribute('id', 'containerCards');
        main.append(mainContent); 
        
        document.body.appendChild(mainContentNone);
        main.append(mainContentNone); 

        const newDivInfo = document.createElement('div') 
        mainContentNone.append(newDivInfo);
        mainContentNone.setAttribute('id', 'containerInfo');

        // criar elementos carousel 

        document.body.append(carousel);
        carousel.setAttribute('id', 'containerCarousel')
        ;

        const previous = document.createElement('span')
        previous.appendChild(document.createTextNode('<'))
        carousel.append(previous)

        const divCarousel = document.createElement('div')
        divCarousel.setAttribute('id', 'divCarousel')
        const next = document.createElement('span')
        carousel.append(divCarousel)
        next.appendChild(document.createTextNode('>'))
        carousel.append(next)



        
        
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
              newDiv.setAttribute('class', 'divCards')
              mainContent.append(newDiv);

              const title = document.createElement('p')  //criar o paragrafo com o title.
              const textTitle = document.createTextNode(element.title)
              title.append(textTitle)
              newDiv.append(title)

              const newImage = document.createElement('img')  //criar a imagem com a imagem do anime
              newImage.setAttribute('src', element.images.jpg.image_url)
              newImage.style.width ='180px'
              newImage.style.height ='230px'
              newDiv.append(newImage);

              
              // função criada para trazer evento onclick.

            
              newDiv.onclick = () =>{

                console.log('teste')    // TESTAR EVENTO CLICK 
                const addClass = document.getElementById('containerInfo')
                addClass.style.display = 'flex';

                
               
                newDivInfo.setAttribute('class', 'divCardsInfo');
               
               
                const titleContainer = document.createElement('p')  //criar o paragrafo com o title.
                const textTitleContainer = document.createTextNode(element.title)
                titleContainer.append(textTitleContainer)
                newDivInfo.replaceChildren(titleContainer)

                const newImageContainer= document.createElement('img')  //criar a imagem com a imagem do anime
                newImageContainer.style.width ='180px'
                newImageContainer.style.height ='230px'
                newImageContainer.setAttribute('src', element.images.jpg.image_url)
                newDivInfo.append(newImageContainer);
  
                const rating = document.createElement('p');  //criar o paragrafo com o rating.
                const textRating = document.createTextNode('Rating: ' + element.rating);
                rating.append(textRating);
                newDivInfo.append(rating);    


                const year = document.createElement('p')  //criar o paragrafo com o ano.
                const textYear = document.createTextNode('Year: ' + element.year);
                year.append(textYear);
                newDivInfo.append(year) ;  

                const genres = document.createElement('p')  //criar o paragrafo com o episodes.
                const textGenres = document.createTextNode('Genre: ' + element.genres[0].name);
                genres.append(textGenres);
                newDivInfo.append(genres) ;

                const duration = document.createElement('p')  //criar o paragrafo com a duration.
                const textDuration = document.createTextNode('Duration: ' + element.duration);
                duration.append(textDuration);
                newDivInfo.append(duration) ;

                const buttonBack = document.createElement('button');
                const buttonText = document.createTextNode('Voltar')
                buttonBack.setAttribute('class', 'buttonBack' )
                buttonBack.append(buttonText);
                newDivInfo.append(buttonBack);


                //Para ativar o botão de voltar e mostrar novamente a grelha completa

                buttonBack.onclick = () =>{
                  var del = document.getElementById('containerInfo');
                  del.style.display = 'none'
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

              function slide(){
                const imgSlide = document.createElement('img')
                imgSlide.setAttribute('src', element.images.jpg.image_url )
                divCarousel.append(imgSlide)

              }

              slide()



            }
          ) 
        )