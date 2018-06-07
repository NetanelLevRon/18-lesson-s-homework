namespace DelegateEvent
{

    delegate string AfterSignHandler(string fullName);

    class Person
    {
        public event AfterSignHandler AfterSign;

        public string FullName { get; set; }
        public bool WantToSign { get; set; }
        
        public string SignAction()
        {
            if (WantToSign)
            {
              return  AfterSign?.Invoke(FullName);
            }

            return null;
        }

    }
}