def doubleChomp!(the_string = '')
  the_string[0] = ''
  the_string = the_string.chomp(' ')
end

def scrape_glassdoor(query, location)
  glassdoor_city_code = {"San+Francisco" => "1147401"}
  base_url = "http://www.glassdoor.com"

  location = glassdoor_city_code[location]

  preamble = '/Job/jobs.htm?suggestCount=1&suggestChosen=false&clickSource=searchBtn&typedKeyword='
  query_url = base_url + preamble + query + '&sc.keyword=' + query + '&locT=C&locId=' + location +'&jobType=all'

  page = Nokogiri::HTML(open(query_url))

  number_jobs=page.css(".jobScopeWrapper").length

  jobs=[]
  number_jobs.times do |index|
    job={}
    title=page.css("#JobScopeWrapper-#{index} h3 a").text
    doubleChomp!(title)
    location = page.css("#JobScopeWrapper-#{index} span[itemprop='addressLocality'] tt").text
    posted_date = page.css("#JobScopeWrapper-#{index} div.minor").text
    description = page.css("#JobScopeWrapper-#{index} p[itemprop='description']")
    company_name = page.css("#JobScopeWrapper-#{index} span.employerName").text
    doubleChomp!(company_name)
    link_to_original = base_url + (page.css("#JobScopeWrapper-1 h3 a")[0]['href'])

    begin
      icon=page.css("#JobScopeWrapper-#{index} img")[0]['src']
    rescue
      icon=""
    end

    puts index
    puts title
    puts posted_date
    puts location
    puts description
    puts "*" * 50 + "Link to original"
    puts link_to_original

    Job.create(:title => title,
               :location => location,
               :description => description,
               :company_name => company_name,
               :link_to_original => link_to_original,
               :posted_date => posted_date)
  end
end

