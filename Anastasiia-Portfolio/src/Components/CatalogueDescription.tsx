// src/Components/CatalogueDescription.tsx
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
  };

  const descriptions: { [key: string]: string[] } = {
    Films: [
      "Description for Films 0",
      "Description for Films 1",
      "Description for Films 2",
      "Description for Films 3",
    ],
    Photos: [
      "Description for Photos 0",
      "Description for Photos 1",
      "Description for Photos 2",
      "Description for Photos 3",
    ],
  };

  // Преобразование id в число и проверка наличия заголовка и описания
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
