using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AddToArrWithWHERE
{
    public partial class Customer
    {
        public override string ToString()
        {

            return $"CustomerID: {CustomerID}, CompanyName: {CompanyName}, Address: {Address}, City: {City}, Region: {Region}, Country: {Country}";
        }

    }
}
