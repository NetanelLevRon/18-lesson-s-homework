using System;

namespace DelegateEvent
{


    class Program
    {
        static void Main(string[] args)
        {
            

            Person[] peopleArray =
            {
                new Person { FullName = "Bob Arnold", WantToSign = true},
                new Person { FullName = "Alice Avery", WantToSign = true},
                new Person { FullName = "Albert Baily", WantToSign = true},
                new Person { FullName = "Matt Baker", WantToSign = false},
                new Person { FullName = "Carol Cambell", WantToSign = true},
                new Person { FullName = "Kevin Brown", WantToSign = false},
                new Person { FullName = "Lisa Bower", WantToSign = true}
            };

            

            Signature[] signatureArray =
            {
                new Signature(peopleArray[0].FullName,peopleArray[0].FullName.ToLower()),
                new Signature(peopleArray[1].FullName,"AliceAvery"),
                new Signature(peopleArray[2].FullName,"A B"),
                new Signature(peopleArray[3].FullName,"M Baker"),
                new Signature(peopleArray[4].FullName,peopleArray[4].FullName.ToUpper()),
                new Signature(peopleArray[5].FullName,"Brown.Kevin"),
                new Signature(peopleArray[6].FullName,"lisa")
            };


            for (int i = 0; i < peopleArray.Length; i++)
            {
                peopleArray[i].AfterSign += (string fullName) => $"{fullName} is signed. and the signature is: {signatureArray[i].FullSignature}\n";

                Console.WriteLine($"\nFullName: {peopleArray[i].FullName}, FullSignature: {signatureArray[i].FullSignature}");
                //if (peopleArray[i].SignAction() != null)
                //    Console.WriteLine(peopleArray[i].SignAction());
            }

        }
    }
}
