using BOL;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{

    public delegate void ProductSearchHandler(string item);

    public class ProductLogic : Prodact
    {
        public static event ProductSearchHandler print;


        public static void SearchProductByEvent()
        {
            List<Prodact> searchProd = DbManager.GetDbResults();
         
            foreach (Prodact item in searchProd)
            {
                if (item.ProductName.Count() == item.CategoryName.Count())
                {
                    print?.Invoke(item.ProductName);
                }
                
                
            }
            
        }

    }
}
