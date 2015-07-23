def scrape_indeed(query, location)
  base_url = "http://www.indeed.com"

  query_url = base_url +'/jobs?q='+ query + '&l=' + location

  page = Nokogiri::HTML(open(query_url))
pages_printed = 0
  loop do #until there's no more pages of job listings
    jobs = page.css("div.row.result")
    number_jobs = jobs.length
    number_jobs.times do |index|
      job = jobs[index]
      title = job.css("a")[0]['title']
      location = job.css("span.location").text
      posted_date = job.css("span.date").text
      description = job.css("span.summary").text
      company_name = job.css("span.company").text

      link_to_original = base_url + job.css("a")[0]['href']
      icon="http://devbootcamp.com/assets/img/devbootcamp-logo2x.png"
      puts "*" * 50
      puts "Title: #{title}"
      puts "Location: #{location}"
      puts "Posted Date: #{posted_date}"

      if Job.where(:title => title, :description => description).empty?

        Job.create(:title => title,
                   :location => location,
                   :icon => icon,
                   :description => description,
                   :company_name => company_name,
                   :link_to_original => link_to_original,
                   :posted_date => posted_date)
      end
    end
    pages_printed += 1

    pages = page.css('div.pagination').css('a') #links to more pages
    num_pages = pages.count
    next_link_text = page.css('div.pagination a span.np').text
    if !next_link_text.include?('Next')
     break
    end

    next_page_url= pages[num_pages-1]['href'] #get the "Next" link
    link_to_next = base_url + next_page_url
    puts link_to_next

    page = Nokogiri::HTML(open(link_to_next))
  end
end