function myFunction() {
    const content = getContent_('https://www.coingecko.com/en/coins/trending');
    const $ = Cheerio.load(content);
    // $("#gecko-table-all > tbody").each((index, element) => {
      	// get data from table
      $('tr').each((index, tr) => {		
      $('td:not([colspan])', tr ).each((index, td) => {
			items[columns[index]] = $(td).text();
      Logger.log(items);
		});	});
      // let tr = $(element).find('tr:nth-child(1)');
    // Logger.log($(tr[index]).text().trim());
    // });

}
