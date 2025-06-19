fetch('https://poetrydb.org/author')

//console.log(response);Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: Response
// .then((response)=>{
//     console.log(response);
    
// })
// Response {type: 'cors', url: 'https://poetrydb.org/author', redirected: false, status: 200, ok: true, …}
// body
// : 
// ReadableStream
// locked
// : 
// false
// [[Prototype]]
// : 
// ReadableStream
// bodyUsed
// : 
// false
// headers
// : 
// Headers {}
// ok
// : 
// true
// redirected
// : 
// false
// status
// : 
// 200
// statusText
// : 
// ""
// type
// : 
// "cors"
// url
// : 
// "https://poetrydb.org/author"
// [[Prototype]]
// : 
// Response
// ﻿

// .then((response)=>{
//     const result=response.json()
//     console.log(result);
    
    
// })
//Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: Object
.then((response)=>{
   
    return response.json()
    
})
.then((data)=>{
    console.log(data);
    
})

// {authors: Array(129)}authors: (129) ['Adam Lindsay Gordon', 'Alan Seeger', 'Alexander Pope', 'Algernon Charles Swinburne', 'Ambrose Bierce', 'Amy Levy', 'Andrew Marvell', 'Ann Taylor', 'Anne Bradstreet', 'Anne Bronte', 'Anne Killigrew', 'Anne Kingsmill Finch', 'Annie Louisa Walker', 'Arthur Hugh Clough', 'Ben Jonson', 'Charles Kingsley', 'Charles Sorley', 'Charlotte Bronte', 'Charlotte Smith', 'Christina Rossetti', 'Christopher Marlowe', 'Christopher Smart', 'Coventry Patmore', 'Edgar Allan Poe', 'Edmund Spenser', 'Edward Fitzgerald', 'Edward Lear', 'Edward Taylor', 'Edward Thomas', 'Eliza Cook', 'Elizabeth Barrett Browning', 'Emily Bronte', 'Emily Dickinson', 'Emma Lazarus', 'Ernest Dowson', 'Eugene Field', 'Francis Thompson', 'Geoffrey Chaucer', 'George Eliot', 'George Gordon, Lord Byron', 'George Herbert', 'George Meredith', 'Gerard Manley Hopkins', 'Helen Hunt Jackson', 'Henry David Thoreau', 'Henry Vaughan', 'Henry Wadsworth Longfellow', 'Hugh Henry Brackenridge', 'Isaac Watts', 'James Henry Leigh Hunt', 'James Thomson', 'James Whitcomb Riley', 'Jane Austen', 'Jane Taylor', 'John Clare', 'John Donne', 'John Dryden', 'John Greenleaf Whittier', 'John Keats', 'John McCrae', 'John Milton', 'John Trumbull', 'John Wilmot', 'Jonathan Swift', 'Joseph Warton', 'Joyce Kilmer', 'Julia Ward Howe', 'Jupiter Hammon', 'Katherine Philips', 'Lady Mary Chudleigh', 'Lewis Carroll', 'Lord Alfred Tennyson', 'Louisa May Alcott', 'Major Henry Livingston, Jr.', 'Mark Twain', 'Mary Elizabeth Coleridge', 'Matthew Arnold', 'Matthew Prior', 'Michael Drayton', 'Oliver Goldsmith', 'Oliver Wendell Holmes', 'Oscar Wilde', 'Paul Laurence Dunbar', 'Percy Bysshe Shelley', 'Philip Freneau', 'Phillis Wheatley', 'Ralph Waldo Emerson', 'Richard Crashaw', 'Richard Lovelace', 'Robert Browning', 'Robert Burns', 'Robert Herrick', 'Robert Louis Stevenson', 'Robert Southey', 'Robinson', 'Rupert Brooke', 'Samuel Coleridge', 'Samuel Johnson', 'Sarah Flower Adams', 'Sidney Lanier', …][[Prototype]]: ObjectET https://poetrydb1.org/author net::ERR_NAME_NOT_RESOLVED


fetch('https://poetrydb1.org/author')
.catch((error)=>{
    console.error(error);
      console.error("Error occurred");
    
})

// (anonymous) @ fetchAPI.js:1Understand this error
  
// fetchAPI.js:64 TypeError: Failed to fetch
//     at fetchAPI.js:1:1