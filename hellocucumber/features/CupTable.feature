Feature: Is the cup empty?

    Determine if a cup is empty

    Scenario Outline: Determinate if a cup with something has desired quantity
        Given A <insideTheCup>
        When I Ask what contains
        And The quantity is <quantity>
        Then The cup should contains <value> <thingInsideTheCup>

        Examples:
            | insideTheCup | thingInsideTheCup       | quantity | value  |
            | "something"  | "filled with something" | "half"   | "50%"  |
            | "something"  | "filled with something" | "full"   | "100%" |
            | "something"  | "filled with something" | "empty"  | "0%"   |
            | "water"      | "filled with water"     | "full"   | "100%" |
            | "coffee"     | "filled with coffee"    | "empty"  | "0%"   |
#  | "coffee"     | "filled with something"    |"empty"|"0%"| #must fail, the rest must pass
