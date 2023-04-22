CREATE MIGRATION m1xyt4zpgib2kjbpnw7hmrbk2fziabpz4amzha72wvxeyl6b6ybz2q
    ONTO initial
{
  CREATE FUTURE nonrecursive_access_policies;
  CREATE ABSTRACT TYPE default::Person {
      CREATE REQUIRED PROPERTY full_name -> std::str;
  };
  CREATE TYPE default::Teacher EXTENDING default::Person;
  CREATE SCALAR TYPE default::Gender EXTENDING enum<Male, Female>;
  CREATE TYPE default::Participant EXTENDING default::Person {
      CREATE REQUIRED LINK teacher -> default::Teacher;
      CREATE PROPERTY age -> std::int16;
      CREATE PROPERTY avatar_url -> std::str;
      CREATE REQUIRED PROPERTY email -> std::str;
      CREATE PROPERTY gender -> default::Gender;
  };
};
