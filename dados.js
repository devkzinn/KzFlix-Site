const dados = [
      {
        id: 1,
        tipo: "movie",
        titulo: "Pecadores",
        descricao:  "Um terror gótico e musical ambientado no sul dos EUA nos anos 1930, onde vampiros racistas enfrentam músicos negros em uma batalha por alma, cultura e sobrevivência.",
        imagem: "imagens/pecadores.webp",
        trailer: "https://www.youtube.com/embed/V3spHR5x5QY",
        generos: ["terror", "suspense", "drama"],
        //ano: 2025
      },
      {
        tipo: "series",
        titulo: "Stranger Things",
        descricao: "Um grupo de amigos enfrenta eventos sobrenaturais em sua cidade.",
        imagem: "imagens/stranger-things.webp",
        trailer: "https://www.youtube.com/embed/mnd7sFt5c3A",
        generos: ["drama", "ficção científica", "terror"],
        //ano: 2016
      },
      {
        id: 3,
        tipo: "movie",
        titulo: "Homem-Aranha: Através do Aranhaverso",
        descricao:
          "Miles Morales viaja por universos paralelos e enfrenta um multiverso de Homens-Aranha.",
        imagem: "imagens/homem-aranha-atraves-do-aranhaverso.webp",
        trailer: "https://www.youtube.com/embed/uhkDkurK0Zg",
        generos: ["ação", "animação", "ficção científica"],
        //ano: 2023
      },
      {
        id: 4,
        tipo: "series",
        titulo: "Cobra Kai",
        descricao:
          "Continuando a rivalidade do Karate Kid, jovens reativam o dojo Cobra Kai.",
        imagem: "imagens/cobra-kai.webp",
        trailer: "https://www.youtube.com/embed/xCwwxNbtK6Y",
        generos: ["ação", "drama"],
        //ano: 2018
      },
      {
        id: 5,
        tipo: "movie",
        titulo: "Um Filme Minecraft",
        descricao:
          "live-action baseado no famoso jogo da Mojang, que acompanha uma adolescente e seu grupo improvável de heróis tentando salvar o mundo do Ender Dragon.",
        imagem: "imagens/minecraft.webp",
        trailer: "https://www.youtube.com/embed/SZMub74Xd-Q",
        generos: ["aventura", "fantasia"],
        //ano: 2025
      },
      {
        id: 6,
        tipo: "series",
        titulo: "Round 6",
        descricao:
          "Centenas de pessoas com dificuldades financeiras aceitam um convite para participar de jogos mortais valendo um grande prêmio em dinheiro.",
        imagem: "imagens/round-6.webp",
        trailer: "https://www.youtube.com/embed/oqxAJKy0ii4",
        generos: ["drama", "suspense", "ação"],
        //ano: 2021
      },
      {
        id: 7,
        tipo: "movie",
        titulo: "Vingadores: Ultimato",
        descricao:
          "Os Vingadores restantes se unem para desfazer as ações de Thanos e restaurar o universo.",
        imagem: "imagens/vingadores-ultimato.webp",
        trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
        generos: ["ação", "aventura", "ficção científica"],
        //ano: 2019
      },
      {
        id: 8,
        tipo: "series",
        titulo: "Game of Thrones",
        descricao:
          "Nobres famílias lutam pelo controle do Trono de Ferro e dos Sete Reinos de Westeros.",
        imagem: "imagens/game-of-thrones.webp",
        trailer: "https://www.youtube.com/embed/bjqEWgDVPe0",
        generos: ["ação", "aventura", "fantasia"],
        //ano: 2011
      },
      {
        id: 9,
        tipo: "movie",
        titulo: "Thunderbolts",
        descricao:
          "Thunderbolts é um filme de super-heróis baseado na equipe de anti-heróis da Marvel Comics, que se unem para realizar missões perigosas em troca de redenção.",
        imagem: "imagens/thunderbolts.webp",
        trailer: "http://www.youtube.com/embed/MaLy0D2FTDc",
        generos: ["ação", "aventura", "ficção científica"],
        //ano: 2025
      },
      {
        id: 10,
        tipo: "series",
        titulo: "Outer Banks",
        descricao:
          "Outer Banks é uma série de aventura e mistério que segue um grupo de adolescentes em busca de um tesouro perdido, enquanto enfrentam rivalidades e segredos na costa da Carolina do Norte.",
        imagem: "imagens/outer-banks.webp",
        trailer: "https://www.youtube.com/embed/uk_hFfUFXh4",
        generos: ["aventura", "mistério", "drama"],
        //ano: 2020
      },
      {
        id: 11,
        tipo: "movie",
        titulo: "Como Treinar o Seu Dragão",
        descricao:
          "Como Treinar o Seu Dragão é uma animação que conta a história de um jovem viking chamado Soluço, que se torna amigo de um dragão chamado Banguela, desafiando as tradições de sua tribo.",
        imagem: "imagens/como-treinar-seu-dragao.webp",
        trailer: "https://www.youtube.com/embed/CWTy1ukPoYY",
        generos: ["aventura", "animação", "fantasia"],
        //ano: 2025
      },
      {
        id: 12,
        tipo: "movie",
        titulo: "Meu Malvado Favorito 4",
        descricao:
          "O vilão mais amado do planeta, que virou agente da Liga Antivilões, retorna para mais uma aventura em Meu Malvado Favorito 4.",
        imagem: "imagens/meu-malvado-favorito-4.webp",
        trailer: "https://www.youtube.com/embed/seSIJf5mhPE",
        generos: ["aventura", "animação", "comédia"],
        //ano: 2024
      },
      {
        id: 13,
        tipo: "series",
        titulo: "Dexter: Ressurreição",
        descricao:
          "Dexter: Ressurreição é um filme de terror psicológico que segue Dexter Morgan, um analista forense que luta contra seus instintos assassinos enquanto tenta reconstruir sua vida após os eventos traumáticos do passado.",
        imagem: "imagens/dexter-ressureicao.webp",
        trailer: "https://www.youtube.com/embed/ngUBfp7yDeE",
        generos: ["terror", "suspense", "drama"],
        //ano: 2025
      },
      {
        id: 14,
        tipo: "movie",
        titulo: "Homem-Aranha: Sem Volta Pra Casa",
        descricao:
          "Homem-Aranha: Sem Volta Pra Casa é um filme de super-herói que segue Peter Parker enquanto ele lida com as consequências de sua identidade secreta ser revelada ao mundo, enfrentando vilões de diferentes universos.",
        imagem: "imagens/homem-aranha-sem-volta-pra-casa.webp",
        video:
          "https://drive.google.com/file/d/1ULWgEAqgIafjMYtU-Tf1wA1GcI4iR2ck/preview",
        trailer: "https://www.youtube.com/embed/FDNNHh7TRN0",
        generos: ["ação", "aventura", "ficção científica"],
        //ano: 2021
      },
      {
        id: 15,
        tipo: "movie",
        titulo: "Oppenheimer",
        descricao:
          "Oppenheimer é um drama biográfico que retrata a vida de J. Robert Oppenheimer, o físico teórico que liderou o Projeto Manhattan e ajudou a desenvolver a primeira bomba atômica durante a Segunda Guerra Mundial.",
        imagem: "imagens/oppenheimer.webp",
        video:
          "https://drive.google.com/file/d/1KyLuCtH9nG4CUqUWEr9q5dGpo_GbNOMF/preview",
        trailer: "https://www.youtube.com/embed/F3OxA9Cz17A",
        generos: ["drama", "história"],
        //ano: 2023
      },
      {
        id: 16,
        tipo: "series",
        titulo: "Wandinha",
        descricao:
          "Wandinha é uma série de comédia sombria que segue a vida de Wandinha Addams, filha do icônico casal Mortícia e Gomez Addams, enquanto ela navega por sua adolescência peculiar em Nevermore Academy.",
        imagem: "imagens/wandinha.webp",
        temporadas: [
          {
            numero: 1,
            episodios: [
              { numero: 1, titulo: "Wandinha Chega em Casa", video: "https://drive.google.com/file/d/14nS0HWXHo42yVEYnLKhZ_DOYfeEi72As/preview" },
              { numero: 2, titulo: "Uma Triste Solidão é uma Triste Solidão", video: "https://drive.google.com/file/d/14s17da7yDYl-pSZTzFO2m8dT0dC6WQLC/preview" },
              { numero: 3, titulo: "Amigos São Coisas Raras e Preciosas", video: "https://drive.google.com/file/d/14uOr_A7W7g-PmPykr_APzUmgTuw8qjlG/preview" },
              { numero: 4, titulo: "Uma Dor Compartilhada é uma Dor Reduzida", video: "https://drive.google.com/file/d/150vAe6HSJDi1antFz6_hT3Ito2bPVVKs/preview" },
              { numero: 5, titulo: "Você Reaparece Quando Menos Espero", video: "https://drive.google.com/file/d/156KiBTtpKMM1lVhBd3AU_y9YFY7p3jPu/preview" },
              { numero: 6, titulo: "Quase Não Reconheci Você", video: "https://drive.google.com/file/d/15I7ho2_l8jComInd3mnE6R8fGc0nfNb4/preview" },
              { numero: 7, titulo: "Se Você Não Estiver em Agonia, Está Errado", video: "https://drive.google.com/file/d/15PeVIjo9fBcfiLNRqvqbrt3aaIHRFVxt/preview" },
              { numero: 8, titulo: "Um Assassinato de Incrível Proporção", video: "https://drive.google.com/file/d/15eBzQQ6yDoQnOa53eCOecpkaZw29wpnC/preview" },
            ],
          },
          {
            numero: 2,
            episodios: [
              { numero: 1, titulo: "Mais desgosto", video: "https://drive.google.com/file/d/1gCYft21K4gX8vMT41aNbrUZj4jFQp4fA/preview" },
              { numero: 2, titulo: "Confronto", video: "https://drive.google.com/file/d/1xhl85O4JYX9xzmhVGi1aiF5PVUxbViyn/preview" },
              { numero: 3, titulo: "Chamado da natureza", video: "https://drive.google.com/file/d/1KNAPjwI_CCkhS8SxpRuyjfv6klaNa3Xj/preview" },
              { numero: 4, titulo: "Se estas paredes falassem", video: "https://drive.google.com/file/d/1kKMyEI9iEgiC2l7cyf2TuuBZpuXlYnpj/preview" },
              { numero: 5, titulo: "Hyde escondido", video: "https://drive.google.com/file/d/1uvNgqM2y_smluHrl_uF4GLBmu0tMQFDt/preview" },
              { numero: 6, titulo: "Conhece a ti mesmo", video: "https://drive.google.com/file/d/1EA8B50pO7t2PpJnNagcNRz-n_5Xughil/preview" },
              { numero: 7, titulo: "De olho no dinheiro", video: "https://drive.google.com/file/d/1UjftrcujDsrSq9ogQsD_IQaVuwkF65F2/preview" },
              { numero: 8, titulo: "É guerra", video: "https://drive.google.com/file/d/1Lgl3_r6yqSwZHaypBOcKfGXU88pFeAWQ/preview" },
            ],
          },
        ],
        trailer: "https://www.youtube.com/embed/4vi6ZWe_3Yc",
        generos: ["comédia", "fantasia", "mistério"],
        //ano: 2022
      },
      {
      id: 17,
        tipo: "movie",
        titulo: "Deadpool & Wolverine",
        descricao:
          "Filme do universo Marvel que reúne o irreverente mercenário Deadpool e o mutante Wolverine em uma aventura cheia de humor ácido, ação intensa e viagens pelo multiverso.",
        imagem: "imagens/deadpool-wolverine.webp",
        video:
          "https://drive.google.com/file/d/1-Zypj93QGX_PJW9TjTqfurdhvgfvdhVu/preview",
        trailer: "https://www.youtube.com/embed/dEbe0rS4Z2A",
        generos: ["comédia", "ação"],
        //ano: 2024
      },
      {
        id: 18,
        tipo: "series",
        titulo: "Dark",
        descricao:
          "Dark é uma série alemã de ficção científica e suspense que explora viagens no tempo e os segredos sombrios de quatro famílias interligadas.",
        imagem: "imagens/dark.webp",
        temporadas: [
          {
            numero: 1,
            episodios: [
              { numero: 1, titulo: "Segredos", video: "https://drive.google.com/file/d/102SGUVg5piDjkOlpltoJSq-PPT_tKcrr/preview" },
              { numero: 2, titulo: "Mentirosos", video: "https://drive.google.com/file/d/104eAEVzIUMs4xtDwaKDE35AYthP01pjt/preview" },
              { numero: 3, titulo: "Passado e Presente", video: "https://drive.google.com/file/d/108LI4kH1oJVoplLU8vx5iVMXG2puMM_M/preview" },
              { numero: 4, titulo: "Duplo Viver", video: "https://drive.google.com/file/d/10k_HhWtTJ1_nYXbpKmrhTR2mbyOToauH/preview" },
              { numero: 5, titulo: "A Verdade", video: "https://drive.google.com/file/d/10nPKhRbXzqh_Kv7meNCslhNPITGc1zAI/preview" },
              { numero: 6, titulo: "Tudo é Agora", video: "https://drive.google.com/file/d/10osbuXXwzZs8EYRFd6RwBzRtOOhjqsHv/preview" },
              { numero: 7, titulo: "Entre o Tempo", video: "https://drive.google.com/file/d/10pDzGPRNOCb-uT53gYExJCRTUsFUXBrZ/preview" },
              { numero: 8, titulo: "O Que Se Semear, Se Colhe", video: "https://drive.google.com/file/d/10yKIyqfod3BRWLVUX01LxhOoEc5cPiLr/preview" },
              { numero: 9, titulo: "Tudo se Repete", video: "https://drive.google.com/file/d/112IqZoerm3kild7cycx8oETtsLc7PBqj/preview" },
              { numero: 10, titulo: "Alfa e Ômega", video: "https://drive.google.com/file/d/116XWWWdSb0E7YiWtqXGyJPWFIFf10R74/preview" },
            ],
          },
          {
            numero: 2,
            episodios: [
              { numero: 1, titulo: "Inícios e Finais", video: "https://drive.google.com/file/d/12GjEt9WnO_-EElEEUsNxOHh_jKMGzCw9/preview" },
              { numero: 2, titulo: "Matéria Escura", video: "https://drive.google.com/file/d/12HKYJuLo5n_-yd6Fg1Za3wEoU8DZe2b7/preview" },
              { numero: 3, titulo: "Fantasmas", video: "https://drive.google.com/file/d/12NDcmKioXYfZXiRkHNCIvZqEmbz9UbFR/preview" },
              { numero: 4, titulo: "Os Viajantes", video: "https://drive.google.com/file/d/12RSAcGC5uevwS6ikbP3nEgRC9blvOBpf/preview" },
              { numero: 5, titulo: "Achados e Perdidos", video: "https://drive.google.com/file/d/12QBmx839BUZstX2iVDP_WNThA4j8_Kfw/preview" },
              { numero: 6, titulo: "Um Ciclo Sem Fim", video: "https://drive.google.com/file/d/12ckZ65-wSsxLPFu_LPC-bs2km6WdeOgF/preview" },
              { numero: 7, titulo: "O Diabo Branco", video: "https://drive.google.com/file/d/12a3xVaT2iJea0PZAFezebFK92RGuPaXI/preview" },
              { numero: 8, titulo: "Finais e Inícios", video: "https://drive.google.com/file/d/12ccFTaTIQAI5g0YAi3gHgFAkhjyICpcD/preview" },
            ],
          },
          {
            numero: 3,
            episodios: [
              { numero: 1, titulo: "Deja-vu", video: "https://drive.google.com/file/d/1-C6AvI4SBesH_47eVL4_G7Pl9ATY94Mh/preview" },
              { numero: 2, titulo: "Os Sobreviventes", video: "https://drive.google.com/file/d/1-J8ffOln6uk10gyGzm_KXIPNd2MPQntQ/preview" },
              { numero: 3, titulo: "Adão e Eva", video: "https://drive.google.com/file/d/1-K1JRMPOkxqVZ5ldNlQPO-bErCpqoxs8/preview" },
              { numero: 4, titulo: "A Origem", video: "https://drive.google.com/file/d/1-HE4B9cVybxrS2lhTmcYCnX96aCe1WN-/preview" },
              { numero: 5, titulo: "Vida e Morte", video: "https://drive.google.com/file/d/1mLnJPtzDwfs1SSLiUoLwjjWbMPEorL6-/preview" },
              { numero: 6, titulo: "Luz e Sombra", video: "https://drive.google.com/file/d/1-UFyVqiTbZ0w61lvC2qigftrit3FQRCg/preview" },
              { numero: 7, titulo: "Entre o Tempo", video: "https://drive.google.com/file/d/1ywPI8JgybfN8iRZqVDtnV3kPe9mmOn-D/preview" },
              { numero: 8, titulo: "O Paraíso", video: "https://drive.google.com/file/d/1-RYxpvU_GHbt9sBMTMWvK-C7G_ruktiP/preview" },
            ],
          },
        ],
        trailer: "https://www.youtube.com/embed/xCwwxNbtK6Y",
        generos: ["ficção científica", "mistério", "drama", "suspense"],
        //ano: 2017
      },
      {
        id: 19,
        tipo: "movie",
        titulo: "Divertidamente 2",
        descricao:
          "Riley enfrenta novas emoções na adolescência, incluindo Ansiedade, Inveja e Vergonha.",
        imagem: "imagens/divertidamente-2.webp",
        video:
          "https://drive.google.com/file/d/12N8oGT62UlTothlQ7KKx1qm1heUaFAt0/preview",
        trailer: "https://www.youtube.com/embed/yAZxx8t9zig",
        generos: ["animação", "comédia", "aventura"],
        //ano: 2024
      },
      {
        id: 20,
        tipo: "movie",
        titulo: "Superman",
        descricao:
          "Superman é um filme de animação que segue as aventuras do icônico super-herói enquanto ele defende a Terra de ameaças intergalácticas e vilões poderosos.",
        imagem: "imagens/superman.webp",
        video:
          "https://drive.google.com/file/d/1rdRUNE4LZBnuI5XIOHwYJ4FgfRRB0EGI/preview",
        trailer: "https://www.youtube.com/embed/6HsfXtgcAE4",
        generos: ["ação", "aventura", "ficção científica"],
        //ano: 2025
      },
      {
        id: 21,
        tipo: "movie",
        titulo: "Karatê Kid: Lendas",
        descricao:
          "Karatê Kid: Lendas é uma animação de ação e aventura onde jovens lutadores viajam pelo mundo para proteger relíquias místicas do karatê.",
        imagem: "imagens/karate.webp",
        video:
          "https://drive.google.com/file/d/105fzRrBUR4xgp3VT2ijOLDM-FHZm0flz/preview",
        trailer: "http://www.youtube.com/embed/jdZPKED0Dqg",
        generos: ["ação", "drama"],
        //ano: 2025
      },
      {
        id: 22,
        tipo: "movie",
        titulo: "Vingadores guerra infinita",
        descricao:
          "Os Vingadores e seus aliados tentam impedir Thanos de coletar as Joias do Infinito, que lhe concederiam poder absoluto para destruir metade do universo.",
        imagem: "imagens/guerra-infinita.webp",
        video:
          "https://drive.google.com/file/d/15OEU9fuH5hjawjaExVnN1kaQBOgVexS8/preview",
        trailer: "https://www.youtube.com/embed/t_ULBP6V9bg",
        generos: ["ação", "aventura", "ficção científica"],
        //ano: 2018
      },
      {
        id: 23,
        tipo: "movie",
        titulo: "Missão Impossível: O acerto final",
        descricao:
          "Missão Impossível: O Último Acerto é um filme de ação e espionagem onde Ethan Hunt e sua equipe enfrentam uma nova ameaça global enquanto tentam recuperar um artefato roubado.",
        imagem: "imagens/missao-impossivel-2025.webp",
        video:
          "https://drive.google.com/file/d/1vXiJWVrfTmTB8i7NLHP6GfSnfAC938vl/preview",
        trailer: "https://www.youtube.com/embed/uo1GEL7pVRk",
        generos: ["ação", "aventura", "suspense"],
        //ano: 2025
      },
      {
        id: 24,
        tipo: "movie",
        titulo: "A Forja: O Poder da Transformação",
        descricao:
          "A Forja: O Poder da Transformação é um filme de ação e drama onde um grupo de heróis improváveis se une para enfrentar uma ameaça que pode destruir o mundo, enquanto descobrem seus próprios poderes e aprendem a confiar uns nos outros.",
        imagem: "imagens/a-forja.webp",
        video:
          "https://drive.google.com/file/d/1urojqb-5HXZ_cceoc4m1G9wM6G6bwKFN/preview",
        trailer: "http://www.youtube.com/embed/ohQ1IZmce5w",
        generos: ["ação", "aventura", "drama"],
        //ano: 2025
      },
      {
        id: 25,
        tipo: "movie",
        titulo: "Moana 2",
        descricao:
          "Moana 2 é uma animação de aventura onde Moana e seus amigos embarcam em uma nova jornada para salvar seu povo e descobrir novos horizontes.",
        imagem: "imagens/moana2.webp",
        video:
          "https://drive.google.com/file/d/16fCY_biwvJSj-fZmOVj4acDMGsbSpDbV/preview",
        trailer: "http://www.youtube.com/embed/lqMJQa3JhZU",
        generos: ["animação", "aventura", "fantasia"],
        //ano: 2025
      },
      {
        id: 26,
        tipo: "movie",
        titulo: "A fonte da juventude",
        descricao:
          "A Fonte da Juventude é uma comédia de ação onde dois agentes secretos se disfarçam como irmãos para recuperar um artefato lendário que concede a juventude eterna.",
        imagem: "imagens/a-fonte.webp",
        video:
          "https://drive.google.com/file/d/1-Chg4J-ZBfwjybwGkyFFAryoA4ilb9dx/preview",
        trailer: "http://www.youtube.com/embed/qUC2ZINsZcM",
        generos: ["comédia", "aventura", "ação"],
        //ano: 2025
      },
      {
        id: 27,
        tipo: "movie",
        titulo: "Doutor Estranho no Multiverso da Loucura",
        descricao:
          "Doutor Estranho no Multiverso da Loucura é um filme de super-herói que segue o Dr. Stephen Strange enquanto ele navega por realidades alternativas e enfrenta ameaças místicas para proteger o multiverso.",
        imagem: "imagens/doutor-estranho-no-multiverso-da-loucura.webp",
        video:
          "https://drive.google.com/file/d/1OzM3olZn43U4UeHMqiES_FSAAxuOCXNq/preview",
        trailer: "http://www.youtube.com/embed/X23XCFgdh2M",
        generos: ["ação", "aventura", "fantasia"],
        //ano: 2022
      },
      {
        id: 28,
        tipo: "series",
        titulo: "Demon Slayer: Kimetsu no Yaiba",
        descricao:
          "Demon Slayer é uma série de anime que segue Tanjiro Kamado, um jovem que se torna um caçador de demônios após sua família ser massacrada por essas criaturas, enquanto busca uma cura para sua irmã Nezuko, que foi transformada em demônio.",
        imagem: "imagens/demon-slayer.webp",
        temporadas: [
          {
            numero: 1,
            episodios: [
              { numero: 1, titulo: "Crueldade", video: "https://drive.google.com/file/d/1mVkNn3ZuE_eGVLbiU6Wd6l1lN9usxAQJ/preview" },
              { numero: 2, titulo: "Treinador, Sakonji Urokodaki", video: "https://drive.google.com/file/d/1A1o6rOn386uZQriN1exO-4fZLrPxEuDW/preview" },
              { numero: 3, titulo: "Sabres de Nichirin de Aço", video: "https://drive.google.com/file/d/1n2NGZxVTF-lAr7CRjVAClxroiOAeE2pO/preview" },
              { numero: 4, titulo: "Finalização da Seleção", video: "https://drive.google.com/file/d/1Ld0q0fismBTcPnMpLpV9v-U3ltDxR9Do/preview" },
              { numero: 5, titulo: "A minha própria lâmina", video: "https://drive.google.com/file/d/1iq9SSgaQLY8YCP3EALSs9Syy58tr1Ulw/preview" },
              { numero: 6, titulo: "Espadachim junto com Demônios", video: "https://drive.google.com/file/d/1TP3jE4pxBNlaAe85abCjg5qVCP4q2RE1/preview" },
              { numero: 7, titulo: "O demônio dos tambores", video: "https://drive.google.com/file/d/1TSWc3vGF4UTc34I2GCjWnF4Q5RS02gEh/preview" },
              { numero: 8, titulo: "O cheiro do encantamento de sangue", video: "https://drive.google.com/file/d/1jKQ84JPhsLItbCqw3Zf132kXYoO-FFMh/preview" },
              { numero: 9, titulo: "O irmão mais velho e o irmão mais novo", video: "https://drive.google.com/file/d/1RhZYun2rCRH3x0ShMf_48rmVh_0MCuud/preview" },
              { numero: 10, titulo: "Sempre juntos", video: "https://drive.google.com/file/d/1-91NFUIndK3I5rBPthnFazuzMRtjb64M/preview" },
              { numero: 11, titulo: "O atalho na casa dos tambores", video: "https://drive.google.com/file/d/12JAiV1BpJzGlZ4cb-XxGJQeZj7rBjQSu/preview" },
              { numero: 12, titulo: "O javali mostra as suas presas, e Zenitsu dorme", video: "https://drive.google.com/file/d/1VQ-nAOmTbnrf-QkBF2ocJ85p6riKspXh/preview" },
              { numero: 13, titulo: "Algo mais importante do que a vida", video: "https://drive.google.com/file/d/1IOCpMALJPzJLMJKiieGmeLCcWGQA5M_q/preview" },
              { numero: 14, titulo: "O salão das borboletas", video: "https://drive.google.com/file/d/1rwMV8h26eXGuzwxzQkJe_eY7o0HPEXun/preview" },
              { numero: 15, titulo: "Monte Natagumo", video: "https://drive.google.com/file/d/1w4E1xY4ea8XgE9_4rM7sjPUnyQzzgFOk/preview" },
              { numero: 16, titulo: "Deixar alguém feliz", video: "https://drive.google.com/file/d/1OEOOivD3Gthjn6KjUa_S8gleNibRg4TG/preview" },
              { numero: 17, titulo: "Você deve dominar uma única coisa", video: "https://drive.google.com/file/d/1mp4Mfb4Y4F6qMVFE5rT_UnHL1Dq9Q1qA/preview" },
              { numero: 18, titulo: "Uma teia enredada", video: "https://drive.google.com/file/d/1Ym0DePU5yuI1IukS6j1MSKGohk5lB6kp/preview" },
              { numero: 19, titulo: "Deus do fogo", video: "https://drive.google.com/file/d/1zrhLAxSetfMBnPWYmw-THi2IYQV03pbD/preview" },
              { numero: 20, titulo: "Finos fios transparentes", video: "https://drive.google.com/file/d/11qG8PioLqTKWmQsf5NwzmPTb37D6L-AI/preview" },
              { numero: 21, titulo: "Contra as regras do corpo de caçadores de demônios", video: "https://drive.google.com/file/d/1k__ujV55MvNfsv5sg2_3BSBXJAoQZLgh/preview" },
              { numero: 22, titulo: "Mestre da Mansão", video: "https://drive.google.com/file/d/1BS1w_RrTixHVjPVMsio2PHZ7n3LWCGpC/preview" },
              { numero: 23, titulo: "Os Hashiras", video: "https://drive.google.com/file/d/1NJn85HQIPqzdTdb4t7S_Lmf2pa_zzisE/preview" },
              { numero: 24, titulo: "Reabilitação", video: "https://drive.google.com/file/d/1fA2n_Zyur0jTOOojDF5rO3GnYSLQwHHs/preview" },
              { numero: 25, titulo: "Tsuguko, Kanao Tsuyuri", video: "https://drive.google.com/file/d/1WgHozGMiyBxyVm00utnH_7aRRqMUMU0H/preview" },
              { numero: 26, titulo: "Nova missão", video: "https://drive.google.com/file/d/1wxt6PHA6wsoXIAC8gCGKR_A_LeS-WEDx/preview" },
            ],
          },
          {
            numero: 2,
            episodios: [
              { numero: 1, titulo: "Rengoku Kyojuro", video: "https://drive.google.com/file/d/1Ui4D5mqEwD9qMujyxjE_zPQbW0mpJQCa/preview" },
              { numero: 2, titulo: "Aprofundando-se no Sono", video: "https://drive.google.com/file/d/1Ty9WakM9U1W5BSC06M0jeDLFfk_4MxzM/preview" },
              { numero: 3, titulo: "De Sonho em Sonho", video: "https://drive.google.com/file/d/1cV5jpq_LrOfEO58LOt9dZm27rsM9rJBC/preview" },
              { numero: 4, titulo: "Insônia", video: "https://drive.google.com/file/d/1CSdUmdxcSlEiNs7X085ysrOQw2OT-23m/preview" },
              { numero: 5, titulo: "Força Infinita", video: "https://drive.google.com/file/d/13YShNnKRTb1HaOTDYSqpduH6reyXx4dJ/preview" },
              { numero: 6, titulo: "Akaza", video: "https://drive.google.com/file/d/1X1Hs9A-h52NpC32ffRcYZL2ues_RNfr1/preview" },
              { numero: 7, titulo: "Coração Flamejante", video: "https://drive.google.com/file/d/1AN6XHFk4tqLa6eOnEbTVRhzKispBm5qh/preview" },
            ],
          },
        ],
        trailer: "https://www.youtube.com/embed/VQGCKyvzIM4",
        generos: ["ação", "aventura", "fantasia"],
        //ano: 2019
      },
      {
        id: 29,
        tipo: "movie",
        titulo: "Invocação do mal",
        descricao:
          "Invocação do Mal é um filme de terror baseado em eventos reais, onde investigadores paranormais ajudam uma família a enfrentar uma entidade maligna em sua casa.",
        imagem: "imagens/invocacao-do-mal.webp",
        video:
          "https://drive.google.com/file/d/12WbOj-0LIox8JSSmp9-e552FSKTGvfEn/preview",
        trailer: "http://www.youtube.com/embed/GQrrXceHn2E",
        generos: ["terror", "suspense", "drama"],
        //ano: 2013
      },
      {
        id: 30,
        tipo: "movie",
        titulo: "Invocação do mal 2",
        descricao:
          "Invocação do Mal 2 é um filme de terror que segue os investigadores paranormais Ed e Lorraine Warren enquanto enfrentam um caso sobrenatural envolvendo uma entidade maligna em Londres.",
        imagem: "imagens/invocacao-do-mal2.webp",
        video:
          "https://drive.google.com/file/d/1-Ohx5UsrPw71Z0dTFLQpy00usKPfatur/preview",
        trailer: "http://www.youtube.com/embed/l3LQgORbhu4",
        generos: ["terror", "suspense", "drama"],
        //ano: 2016
      },
      {
        id: 31,
        tipo: "movie",
        titulo: "Invocação do mal 3: A Ordem do Demônio",
        descricao:
          "Invocação do Mal 3 é um filme de terror que segue os investigadores paranormais Ed e Lorraine Warren enquanto enfrentam um caso sobrenatural envolvendo um jovem acusado de assassinato.",
        imagem: "imagens/invocacao-do-mal3.webp",
        video:
          "https://drive.google.com/file/d/13eHfdZiaUnodeACE6ZclMU_f0BpRFwsJ/preview",
        trailer: "http://www.youtube.com/embed/anDtrp34xig",
        generos: ["terror", "suspense", "drama"],
        //ano: 2021
      },
      {
        id: 32,
        tipo: "movie",
        titulo: "Invocação do mal 4: O Último Ritual",
        descricao:
          "Invocação do Mal 4 é um filme de terror que segue os investigadores paranormais Ed e Lorraine Warren enquanto enfrentam um caso sobrenatural envolvendo uma família aterrorizada por uma entidade maligna.",
        imagem: "imagens/invocacao-do-mal4.webp",
        video:
          "https://drive.google.com/file/d/1oeZJxGI0q-xrUcnLMLnpwKxl5YdGKR-p/preview",
        trailer: "http://www.youtube.com/embed/PK36Lr7dJU8",
        generos: ["terror", "suspense", "drama"],
        //ano: 2025
      },
      {
        id: 33,
        tipo: "movie",
        titulo: "Lilo & Stitch",
        descricao:
          "Lilo & Stitch é uma animação que conta a história de uma menina havaiana que adota um alienígena fugitivo, levando a aventuras cheias de humor e emoção.",
        imagem: "imagens/lilo-stitch.webp",
        video:
          "https://drive.google.com/file/d/1_jmF-4jRaRfM4P1Wej9HvsMZUjeTHNjA/preview",
        trailer: "https://www.youtube.com/embed/oLnS1Ij9-Kk",
        generos: ["animação", "comédia", "família"],
        //ano: 2025
      },
      {
        id: 34,
        tipo: "movie",
        titulo: "F1 - O Filme",
        descricao:
          "F1: O Filme traz Brad Pitt como ex-piloto que retorna às pistas para salvar uma equipe em crise.",
        imagem: "imagens/f1.webp",
        video:
          "https://drive.google.com/file/d/10mZsGmzx473YczHo-SWwGKnG3zNZXKNr/preview",
        trailer: "http://www.youtube.com/embed/ZiDphkXCZsQ",
        generos: ["aventura"],
        //ano: 2025
      },
      {
        id: 35,
        tipo: "movie",
        titulo: "Eu sei oque vocês fizeram no verão passado",
        descricao:
          "Eu Sei o Que Vocês Fizeram no Verão Passado é um filme de terror onde um grupo de amigos é perseguido por um assassino misterioso após um acidente fatal.",
        imagem: "imagens/eu-sei-o-que-voces-fizeram-no-verao-passado.webp",
        video:
          "https://drive.google.com/file/d/1fZEspkk3gABLRTJJoiGu2GOZYZ-zB2ev/preview",
        trailer: "http://www.youtube.com/embed/eTVrRbIaFxs",
        generos: ["terror", "suspense"],
        //ano: 2025
      },
    ]