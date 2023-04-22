module default {
    abstract type Person {
        required property full_name -> str;
    }

    type Participant extending Person {
        property age -> int16;
        required property email -> str;
        property gender -> Gender;
        property avatar_url -> str;
        required link teacher -> Teacher
    }

    type Teacher extending Person {

    }

    scalar type Gender extending enum<Male, Female>;
}
