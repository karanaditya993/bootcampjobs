base_posting_url = "http://careers.stackoverflow.com"
query_urls = [
  "http://careers.stackoverflow.com/jobs?searchTerm=rails+developer&location=san+francisco+&range=20&distanceUnits=Miles",
  "http://careers.stackoverflow.com/jobs?searchTerm=ruby+developer&location=san+francisco+&range=20&distanceUnits=Miles",
  "http://careers.stackoverflow.com/jobs?searchTerm=front+end+developer&location=san+francisco+&range=20&distanceUnits=Miles",
  "http://careers.stackoverflow.com/jobs?searchTerm=junior+developer&location=san+francisco+&range=20&distanceUnits=Miles",
  "http://careers.stackoverflow.com/jobs?searchTerm=full+stack+developer&location=san+francisco+&range=20&distanceUnits=Miles",
  "http://careers.stackoverflow.com/jobs?searchTerm=backend+developer&location=san+francisco+&range=20&distanceUnits=Miles",
  "http://careers.stackoverflow.com/jobs?searchTerm=javascript+developer&location=san+francisco+&range=20&distanceUnits=Miles"
]

posting_urls = []

query_urls.each do |query|
  doc = Nokogiri::HTML(open(query))
  doc.css("h3.-title").each do |job|
    job.css("a").each do |link|
      posting_urls << link['href']
    end
  end
  sleep(5)
  posting_urls.each do |url_extension|
    job_page = Nokogiri::HTML(open(base_posting_url + url_extension))

    #   # getting the title
    title = job_page.css(".title").text
    # #
    #   # getting the location
    location = job_page.css(".location").text
    #   # getting the description

    description = job_page.css(".description").text

      # getting the url
    link_to_original = base_posting_url + url_extension

      # getting company name
    company_name = job_page.css(".employer").text

    icon = "http://devbootcamp.com/assets/img/devbootcamp-logo2x.png"


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
