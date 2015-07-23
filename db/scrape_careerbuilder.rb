def scrape_careerbuilder(query, location)

  base_url = "http://www.careerbuilder.com"

  query_url = base_url +'/jobseeker/jobs/jobresults.aspx?s_rawwords='+ query + '&s_freeloc=' + location

  page = Nokogiri::HTML(open(query_url))

  pages_printed = 0

  loop do
    jobs = page.css(".medium-12")
    number_jobs = jobs.length
    index = 0
    number_jobs.times do |index|
      job = jobs[index]
      title = page.css("#NJL_ND__ctl#{index}_cblTitle").text
      location = page.css("#NJL_ND__ctl#{index}_litLocation").text
      posted_date = page.css("#NJL_ND__ctl#{index}_lblPosted").text
      description = page.css("#NJL_ND__ctl#{index}_litTeaser").text
      company_name = page.css("#NJL_ND__ctl#{index}_cblCompany").text

      link_to_original = job.css("a.jt.prefTitle")[0]['href']
      icon = "http://devbootcamp.com/assets/img/devbootcamp-logo2x.png"

      if Job.where(:title => title,
                   :description => description).empty?

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

    pages = page.css('.bottom-pagination').css('a')
    num_pages = pages.count
    next_link_text = page.css('.bottom-pagination a.JL_MXDLPagination2_next').text

    if !next_link_text.include?('Next')
      break
    end

    next_page_url = pages[num_pages - 1]['href']
    link_to_next = next_page_url

    page = Nokogiri::HTML(open(link_to_next))

  end
end