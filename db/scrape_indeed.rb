def scrape_indeed(query, location)
  base_url = "http://www.indeed.com"

  query_url = base_url +'/jobs?q='+ query + '&l=' + location

  page = Nokogiri::HTML(open(query_url))

  loop do #until there's no more pages of job listings
    jobs = page.css("div.row.result")
    number_jobs = jobs.length
    number_jobs.times do |index|
      job = jobs[index]
      puts "*" * 50
      title = job.css("a")[0]['title']
      location = job.css("span.location").text
      posted_date = job.css("span.date").text
      description = job.css("span.summary")
      company_name = job.css("span.company").text

      puts "Title: #{title}"
      puts "Location: #{location}"
      puts "Posted Date: #{posted_date}"

      link_to_original = base_url + job.css("a")[0]['href']
      # Job.create(:title => title,
      #            :location => location,
      #            :description => description,
      #            :company_name => company_name,
      #            :link_to_original => link_to_original,
      #            :posted_date => posted_date)
    end
    pages = page.css('div.pagination').css('a') #links to more pages
    num_pages = pages.count
    puts "number of links to more pages:  #{num_pages}"

    break if num_pages == 0

    url= pages[num_pages-1]['href'] #get the "Next" link
    link_to_next = base_url + url
    puts link_to_next
    page = Nokogiri::HTML(open(link_to_next))

  end
end