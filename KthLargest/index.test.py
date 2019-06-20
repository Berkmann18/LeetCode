import unittest
from index import findKthLargest

class TestStringMethods(unittest.TestCase):
  def test_ex1(self):
    self.assertEqual(findKthLargest([3,2,1,5,6,4], 2), 5)

  def test_ex2(self):
    self.assertEqual(findKthLargest([3,2,3,1,2,4,5,5,6], 4), 4)

if __name__ == '__main__':
  unittest.main()