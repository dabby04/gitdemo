# Random utility functions
import random

def get_random_number(start=1, end=100):
	"""Return a random integer between start and end."""
	return random.randint(start, end)

def reverse_string(s):
	"""Return the reversed version of the input string."""
	return s[::-1]

def is_prime(n):
	"""Check if a number is prime."""
	if n < 2:
		return False
	for i in range(2, int(n ** 0.5) + 1):
		if n % i == 0:
			return False
	return True

class UserCard:
	def __init__(self, name, age):
		self.name = name
		self.age = age

	def greet(self):
		return f"Hello, my name is {self.name} and I am {self.age} years old."

	def is_adult(self):
		return self.age >= 18
