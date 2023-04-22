CREATE MIGRATION m1d2wyadquke4v37dyqfzejeggs5pjxlhyxky3srcqzv3xtjmvryha
    ONTO m1xyt4zpgib2kjbpnw7hmrbk2fziabpz4amzha72wvxeyl6b6ybz2q
{
  ALTER TYPE default::Participant {
      DROP LINK teacher;
  };
  ALTER TYPE default::Participant {
      CREATE REQUIRED PROPERTY teacher -> std::str {
          SET REQUIRED USING ('Nikhil Warke');
      };
  };
};
