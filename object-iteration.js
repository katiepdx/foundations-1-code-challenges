// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/


/*
Output:
`wheelstypegoes`
or
`goeswheelstype`
or
`wheelsgoestype`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    const keys = Object.keys(someObject)
    
    return keys
}


/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    const keys = Object.keys(someObject)

    const upperCaseKeys = keys.map(key => key.toUpperCase())
    
    let newObject;
    upperCaseKeys.forEach(key => {
        newObject = {
            ...newObject,
            [key]: someObject[key.toLowerCase()]
        };
    })
    return newObject;
}

/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    const keys = Object.keys(someObject)
    const values = Object.values(someObject)

    let tuples = []
    keys.map((key, index) => {
        tuples = [...tuples, [key, values[index]]]
    })

    return tuples;
}
