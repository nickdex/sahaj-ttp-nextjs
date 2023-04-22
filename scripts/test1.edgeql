# WITH names := ['Nikhil Warke']
# FOR teacher IN names union 
# (   
#     INSERT Teacher {
#         full_name := 'Nikhil Warke'
#     }
# );

# WITH data := to_json('[{"full_name":"Natalie Paisley","age":"26","email":"natalie@gmail.com","gender":"Female","teacher_name":"Nikhil Warke","avatar":"/img/team-3.jpg"},{"full_name":"Natalie Paisley","age":"26","email":"natalie@gmail.com","gender":"Female","teacher_name":"Nikhil Warke","avatar":"/img/girl-1.jpeg"},{"full_name":"Natalie Paisley","age":"26","email":"natalie@gmail.com","gender":"Female","teacher_name":"Nikhil Warke","avatar":"/img/girl-2.jpeg"}]'),
# FOR student IN json_array_unpack(data) union
# ( 
#     INSERT Participant {
#         full_name := <str>student['full_name'],
#         age := <int16>student['age'],
#         email := <str>student['email'],
#         gender := <Gender>student['gender'],
#         teacher := assert_single(( select Teacher filter .full_name = 'Nikhil Warke' )),
#         avatar_url := <str>student['avatar']
#     }
# );
