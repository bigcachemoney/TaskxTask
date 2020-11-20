json.array! @tasks do |task|
    json.set! task.id do 
        json.partial! 'api/tasks/task', task: task 
    end
end