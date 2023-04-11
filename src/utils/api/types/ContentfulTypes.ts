type ContentfulImageType = {
  fields: {
    description: string;
    file: {
      contentType: string;
      details: {
        image: {
          height: number;
          width: number;
        };
        size: number;
      };
      fileName: string;
      url: string;
    };
    tiltle: string;
  };
};
