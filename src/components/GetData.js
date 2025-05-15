function GetData(dataName) {
  switch (dataName) {
    case 'products':
      const products = [
        {
          id: '1',
          name: 'Awesome Soft Hat',
          name_category: 'Thời trang nam',
          code: '19381-4141',
          image:
            'https://media.karousell.com/media/photos/products/2024/6/20/brand_new_in_stock_awesome_cot_1718878417_85392e1d_progressive',
          price: '788.00',
          old_price: '529.00',
        },
        {
          id: '2',
          name: 'Intelligent Granite Pants',
          name_category: 'Thời trang nam',
          code: '81541',
          image:
            'https://apisap.fabindia.com/medias/20179481-03.jpg?context=bWFzdGVyfGltYWdlc3w4NTMzOXxpbWFnZS9qcGVnfGFEbGpMMmcwTUM4ME9Ea3lNakF4TXpJek56STNPQzh5TURFM09UUTRNVjh3TXk1cWNHY3xhYTVhMDRhYTNkMDQ1ZDVhZjc0NTNkNmYxMGRkMjM1NmY3NGRhMzBiMWVmYWU1MmJkZjMwNDc0NDBmOGY0ZGE0',
          price: '13.00',
          old_price: '729.00',
        },
      ];
      return products;
    default:
      return [];
  }
}

export default GetData;
