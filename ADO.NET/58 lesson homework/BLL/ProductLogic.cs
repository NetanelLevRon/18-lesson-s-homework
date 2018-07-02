using BOL;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class ProductLogic : Prodact
    {
        public event Action<Prodact> ProductSearchHandler;


        public Action<Prodact> SearchProductByEvent()
        {
            List<Prodact> searchProd = DbManager.GetDbResults();
            List<Category> searchCat = DbManager.GetDbResultsCat();

            foreach (Prodact item in searchProd)
            {
                foreach (Category cat in searchCat)
                {
                    if (item.ProductName.Count() == cat.CategortName.Count())
                    {
                        ProductSearchHandler?.Invoke(item);
                        ProductSearchHandler += (p => p.ToString());
                        return ProductSearchHandler;
                    }
                }

            }
            return ProductSearchHandler;
        }

    }
}
