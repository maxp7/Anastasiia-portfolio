import React from 'react';

interface CatalogueDescriptionProps {
  title: string;
  id: string;
}

const CatalogueDescription: React.FC<CatalogueDescriptionProps> = ({ title, id }) => {
  // Настройка динамического заголовка и описания в зависимости от title и id
  const headers: { [key: string]: string[] } = {
    Films: [
      "Title for Films 0",
      "Title for Films 1",
      "Title for Films 2",
      "Title for Films 3",
    ],
    Photos: [
      "Queen",
      "Street",
      "Biene",
      "Title for Photos 3",
    ],
    Installation: [
        "Tactile Music Interface"
      ]
  };

  const descriptions: { [key: string]: string[] } = {
    Films: [
      "Description for Films 0",
      "Description for Films 1",
      "Description for Films 2",
      "Description for Films 3",
    ],
    Photos: [
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus recusandae labore eos tenetur, ullam reiciendis. Hic voluptatem repellendus tenetur, debitis est pariatur ipsam tempore adipisci eius vitae officia harum blanditiis praesentium delectus quaerat. Quos iusto hic ipsum fuga ex temporibus voluptatem, sed nisi harum et, itaque perferendis laboriosam quaerat quisquam molestiae id atque sapiente optio. Earum voluptatem assumenda reiciendis recusandae, quis velit natus tempora sint libero porro pariatur nesciunt neque distinctio fugiat facilis explicabo ipsum similique quae provident asperiores ad. In aut fuga culpa mollitia animi itaque ipsum, vitae tempore, possimus repellendus nisi aperiam? Facilis veritatis optio in amet accusantium. ",
      "Description for Photos 1",
      "Description for Photos 2",
      "Description for Photos 3",
    ],
    Installation: [
        "Descriptions for insta"
      ]
  };
  const index = parseInt(id, 10);
  const header = headers[title] ? headers[title][index] : "No title available";
  const description = descriptions[title] ? descriptions[title][index] : "No description available";

  return (
    <div>
      <h1>{header}</h1>
      <p>{description}</p>
    </div>
  );
};

export default CatalogueDescription;
