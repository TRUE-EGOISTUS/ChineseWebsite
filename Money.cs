using System;

public class Money
{
    public double Amount { get; private set; }

    public Money(double amount)
    {
        Amount = amount;
    }

    public double ConvertTo(double exchangeRate)
    {
        
        return Amount * exchangeRate;
    }
    
    public override string ToString()
    {
        
        return $"{Amount} валюты";
    }
}
public class Program
{
    public static void Main()
    {
        Money money = new Money(100); 
        
        
        double exchangeRate = 1.2; 
        double convertedAmount = money.ConvertTo(exchangeRate); 
        Console.WriteLine(convertedAmount);  

        
        Console.WriteLine(money);
    }
}
