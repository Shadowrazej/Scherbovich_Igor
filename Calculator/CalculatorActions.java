package Calculator;

import java.util.Scanner;

/**
 * Created by Newermind on 25.03.2018.
 */
public class CalculatorActions {

    protected CalculatorActions() {
        double num1 = getNum1();
        double num2 = getNum2();
        String operation = getOperation();
        System.out.println(calc(num1, num2, operation));
    }

    private Scanner input = new Scanner(System.in);
    private String function = input.nextLine();
    private String[] split = function.split(" ");

    private double getNum1() {
        return Double.parseDouble(split[0]);
    }

    private double getNum2() {
        return Double.parseDouble(split[2]);
    }

    private String getOperation() {
        return split[1];
    }

    private double calc(double num1, double num2, String operation) {
        double result = 0;
        switch (operation) {
            case "+": result = num1 + num2;
                break;
            case "-": result = num1 - num2;
                break;
            case "*": result = num1 * num2;
                break;
            case "/": if (num2 == 0) {
                System.out.println("Ошибка: деление на 0");
            } else result = num1 / num2;
                break;
        }
        return result;
    }
}
