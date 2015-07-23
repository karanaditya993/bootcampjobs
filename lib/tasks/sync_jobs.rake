require 'gather_jobs'

namespace :sync_jobs do 
	desc 'gathering all jobs from our targeted sites'
	task :jobs => :environment do 
		total = JobsImporter.sync_jobs
		puts "There are now #{total} Jobs from Github, GlassDoor, Indeed, and StackOverflow."
	end
end