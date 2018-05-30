using System;

namespace Construction
{
    class Program
    {

        #region ENUMS
        public enum Country
        {
            Israel,
            Frence,
            Spain,
            Portugal,
            Brazil,
            USA,
            England,
            Egypt
        }

        public enum Service
        {
            spa,
            breakfast,
            lunch,
            pool,
            gym,
            seaLandscape
        } 
        #endregion

        static void Main(string[] args)
        {
            Building[] buildings = new Hotel[5];

            //inline initialization - אם זאת הכוונה ב 

            #region First Obj
            buildings[0] = new Hotel
            {
                HotelsCountry = Country.Brazil,
                IsHaveElevator = true,
                NumOfFloors = 20,
                ServInHotel = new Service[] { Service.pool, Service.lunch, Service.seaLandscape },
                SoldedRooms = 35,
                NumOfRooms = 50
            };
            #endregion

            #region Second Obj
            buildings[1] = new Hotel
            {
                HotelsCountry = Country.Israel,
                IsHaveElevator = true,
                NumOfFloors = 30,
                ServInHotel = new Service[] { Service.gym, Service.spa, Service.seaLandscape },
                SoldedRooms = 35,
                NumOfRooms = 90
            };
            #endregion

            #region Third Obj
            buildings[2] = new Hotel
            {
                HotelsCountry = Country.Portugal,
                IsHaveElevator = true,
                NumOfFloors = 25,
                ServInHotel = new Service[] { Service.pool, Service.breakfast, Service.gym },
                SoldedRooms = 40,
                NumOfRooms = 58
            };
            #endregion

            #region Fourth Obj
            buildings[3] = new Hotel
            {
                HotelsCountry = Country.Spain,
                IsHaveElevator = true,
                NumOfFloors = 10,
                ServInHotel = new Service[] { Service.seaLandscape, Service.gym, Service.breakfast },
                SoldedRooms = 12,
                NumOfRooms = 40
            };
            #endregion

            #region Fifth Obj
            buildings[4] = new Hotel
            {
                HotelsCountry = Country.USA,
                IsHaveElevator = true,
                NumOfFloors = 22,
                ServInHotel = new Service[] { Service.pool, Service.lunch, Service.spa },
                SoldedRooms = 35,
                NumOfRooms = 70
            };
            #endregion


            foreach (Building item in buildings)
            {
                Console.WriteLine($"---------{(item as Hotel).HotelsCountry}---------\n");
                Console.WriteLine(item.GetDetails());
            }

        }
    }
}
