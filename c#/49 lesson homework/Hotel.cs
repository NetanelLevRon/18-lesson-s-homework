using static Construction.Program;

namespace Construction
{
    class Hotel:Building
    {
        #region Ctor
        public Hotel() { }
        #endregion

        #region PROPERTIES
        #region Number Of Rooms
        private int numOfRooms;

        public int NumOfRooms
        {
            get { return numOfRooms; }
            set { numOfRooms = value; }
        }
        #endregion

        #region Solded Rooms
        private int soldedRooms;

        public int SoldedRooms
        {
            get { return soldedRooms; }
            set { soldedRooms = value; }
        }
        #endregion

        #region Hotel's Country
        private Country hotelsCountry;

        public Country HotelsCountry
        {
            get { return hotelsCountry; }
            set { hotelsCountry = value; }
        }
        #endregion

        #region Services In The Hotel
        private Service[] servInHotel = new Service[3];

        public Service[] ServInHotel
        {
            get { return servInHotel; }
            set { servInHotel = value; }
        }
        #endregion 
        #endregion

        #region Get Details Func
        public override string GetDetails()
        {
            return $"Hotel's Country: {HotelsCountry}.\nNumber Of Rooms: {NumOfRooms}.\nSolded Rooms: {SoldedRooms}.\nServices In The Hotel:\n   1. {ServInHotel[0]}.\n   2. {ServInHotel[1]}.\n   3. {ServInHotel[2]}.\n{base.GetDetails()}";
        } 
        #endregion

    }    
}
