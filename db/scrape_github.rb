def scrape_github(query, location)
  base_url = "https://jobs.github.com"
  query_url = base_url +'/positions?description='+ query + '&location=' + location
  posting_urls = []

# # this is getting us the url's for each of the individual posting pages
  doc = Nokogiri::HTML(open(query_url))
  doc.css("h4 a").each do |job|
    posting_urls << job['href']
  end
#
  x = 0
  posting_urls.each do |url_extension|
    job_page = Nokogiri::HTML(open(base_url + url_extension))

    # opening the individual page in the posting_url's array
    # on each individual page, we are defining our job model with certain attributes
    # getting the title
    title = job_page.css(".inner h1").text

    # getting the location
    location = job_page.css(".supertitle").text

    # # getting the job description
    description = job_page.css(".column.main").text
    link_to_original = job_page.css(".module.highlighted .inner p").text

    begin
      company_name = doc.css(".company")[x].text
      posted_date = doc.css(".when.relatize")[x].text
    rescue
      next
    end

    icon="http://devbootcamp.com/assets/img/devbootcamp-logo2x.png"

    x += 1

    if Job.where(:title => title,
                  :description => description).empty?

      Job.create(:title => title,
                  :icon => icon,
                  :location => location,
                  :description => description,
                  :company_name => company_name,
                  :link_to_original => link_to_original)
    end
  end
end