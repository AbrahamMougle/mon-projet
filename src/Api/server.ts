import { createServer, Model } from "miragejs";

export function makeServer() {
  createServer({
    models: {
      product: Model,
    },

    seeds(server) {
      server.create("product", {
        id: "1",
        name: "Casque Bluetooth",
        price: 49.99,
        image: "/store/photo1.jpg",
        similarImages: [
          "/store/photo1.jpg",
          "/store/photo2.jpg",
          "/store/photo3.jpg",
          "/store/photo4.jpg",
        ],
        description: "Un casque sans fil avec réduction de bruit.",
        category: "Audio",
      });

      server.create("product", {
        id: "2",
        name: "Clavier Mécanique RGB",
        price: 89.99,
        image: "/store/photo2.jpg",
        similarImages: [
          "/store/photo2.jpg",
          "/store/photo.jpg",
          "/store/photo3.jpg",
          "/store/photo4.jpg",
        ],
        description: "Clavier de jeu rétroéclairé RGB avec switches bleus.",
        category: "Informatique",
      });
      server.create("product", {
        id: "3",
        name: "Clavier Mécanique RGB",
        price: 89.99,
        image: "/store/photo3.jpg",
        similarImages: [
          "/store/photo3.jpg",
          "/store/photo2.jpg",
          "/store/photo8.jpg",
          "/store/photo4.jpg",
        ],
        description: "Clavier de jeu rétroéclairé RGB avec switches bleus.",
        category: "Informatique",
      });

      server.create("product", {
        id: "4",
        name: "Clavier Mécanique RGB",
        price: 89.99,
        image: "/store/photo4.jpg",
        similarImages: [
          "/store/photo4.jpg",
          "/store/photo2.jpg",
          "/store/photo3.jpg",
          "/store/photo6.jpg",
        ],
        description: "Clavier de jeu rétroéclairé RGB avec switches bleus.",
        category: "Informatique",
      });
      server.create("product", {
        id: "5",
        name: "Clavier Mécanique RGB",
        price: 89.99,
        image: "/store/photo7.jpg",
        similarImages: [
          "/store/photo7.jpg",
          "/store/photo2.jpg",
          "/store/photo3.jpg",
          "/store/photo4.jpg",
        ],
        description: "Clavier de jeu rétroéclairé RGB avec switches bleus.",
        category: "Informatique",
      });
      server.create("product", {
        id: "6",
        name: "Clavier Mécanique RGB",
        price: 89.99,
        image: "/store/photo6.jpg",
        similarImages: [
          "/store/photo6.jpg",
          "/store/photo2.jpg",
          "/store/photo3.jpg",
          "/store/photo4.jpg",
        ],
        description: "Clavier de jeu rétroéclairé RGB avec switches bleus.",
        category: "Informatique",
      });
      server.create("product", {
        id: "7",
        name: "Clavier Mécanique RGB",
        price: 89.99,
        image: "/store/photo7.jpg",
        similarImages: [
          "/store/photo7.jpg",
          "/store/photo2.jpg",
          "/store/photo3.jpg",
          "/store/photo4.jpg",
        ],
        description: "Clavier de jeu rétroéclairé RGB avec switches bleus.",
        category: "Informatique",
      });


      server.create("product", {
        id: "8",
        name: "Ultra Casque",
        price: 69.99,
        image: "/store/photo8.jpg",
        similarImages: [
          "/store/photo8.jpg",
          "/store/photo2.jpg",
          "/store/photo3.jpg",
          "/store/photo4.jpg",
        ],
        description: "Montre intelligente avec suivi du sommeil et des pas.",
        category: "Wearables",
      });
      server.create("product", {
        id: "9",
        name: 'casque',
        price: 59.99,
        description: "Montre intelligente avec suivi du sommeil et des pas.",
        image: "/store/photo5.jpg",
        similarImages: [
          "/store/photo5.jpg",
          "/store/photo2.jpg",
          "/store/photo3.jpg",
          "/store/photo4.jpg",
        ],
      });
      server.create("product", {
        id: "10",
        name: "Aipod",
        price: 59.99,
        description: "Montre intelligente avec suivi du sommeil et des pas.",
        image: "/store/photo10.png",
        similarImages: [
          "/store/photo10.png",
          "/store/photo5.jpg",
          "/store/photo3.jpg",
          "/store/photo4.jpg",
        ],
      });
      server.create("product", {
        id: "11",
        name: "Ordinateur",
        price: 59.99,
        description: "Montre intelligente avec suivi du sommeil et des pas.",
        image: "/store/photo11.png",
        similarImages: [
          "/store/photo11.png",
          "/store/photo12.jpg",
          "/store/photo3.jpg",
          "/store/photo4.jpg",
        ],
      });
      server.create("product", {
        id: "12",
        name: "Chaussures de sport",
        price: 59.99,
        description: "Montre intelligente avec suivi du sommeil et des pas.",
        image:"/store/photo12.jpg",
        similarImages: [
          "/store/photo12.jpg",
          "/store/photo2.jpg",
          "/store/photo3.jpg",
          "/store/photo4.jpg",
        ],
      });
      
      server.create("product", {
        id: "13",
        name: "clavier",
        price: 59.99,
        description: "Montre intelligente avec suivi du sommeil et des pas.",
        image: "/store/photo12.jpg",
        similarImages: [
          "/store/photo9.jpg",
          "/store/photo2.jpg",
          "/store/photo3.jpg",
          "/store/photo4.jpg",
        ],
      });
      

    },

    routes() {
      this.namespace = "api";

      this.get("/products", (schema) => {
        return schema.all("product");
      });
      this.get("/products/:id", (schema, request) => {
        let id = request.params.id;
        return schema.find("product", id);
      });
    },
  });
}
