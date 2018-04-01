package by.scherbovich;

import java.util.Scanner;

/**
 * Created by Newermind on 01.04.2018.
 */
public class Calculator {

    public static void main(String[] args) {
        Calculator calculator = new Calculator();
        Scanner input = new Scanner(System.in);
        double num1 = input.nextDouble();
        String operation = input.next();
        double num2 = input.nextDouble();
        System.out.println(calculator.calculate(num1, num2, operation));
    }

    public double add(double num1, double num2) {
        return num1 + num2;
    }

    public double subtract(double num1, double num2) {
        return num1 - num2;
    }

    public double multiply(double num1, double num2) {
        return num1 * num2;
    }

    public double divide(double num1, double num2) {
        return num2 == 0 ? -1 : num1 / num2;
    }

    public double calculate(double num1, double num2, String operation) {
        Calculator calculator = new Calculator();
        double result = 0;
        switch (operation) {
            case "+":
                result = calculator.add(num1, num2);
                break;
            case "-":
                result = calculator.subtract(num1, num2);
                break;
            case "*":
                result = calculator.multiply(num1, num2);
                break;
            case "/":
                result = calculator.divide(num1, num2);
                break;
        }
        return result;
    }

}
