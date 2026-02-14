import requests
import sys
from datetime import datetime

class PortfolioAPITester:
    def __init__(self, base_url="https://73d9d0d6-815a-42f3-af52-ced2af4fa3b8.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.errors = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"Response: {response_data}")
                    return True, response_data
                except:
                    print(f"Response: {response.text}")
                    return True, response.text
            else:
                self.errors.append(f"{name}: Expected {expected_status}, got {response.status_code}")
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text}")

            return success, {}

        except requests.exceptions.Timeout:
            self.errors.append(f"{name}: Request timeout after 10 seconds")
            print(f"❌ Failed - Request timeout")
            return False, {}
        except Exception as e:
            self.errors.append(f"{name}: {str(e)}")
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_health_endpoint(self):
        """Test the health check endpoint"""
        return self.run_test("Health Check", "GET", "api/health", 200)

def main():
    print("🚀 Starting Portfolio Backend API Tests")
    print("=" * 50)
    
    # Setup
    tester = PortfolioAPITester()
    
    # Test health endpoint
    health_success, health_response = tester.test_health_endpoint()
    
    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.errors:
        print("\n❌ Errors found:")
        for error in tester.errors:
            print(f"  - {error}")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("⚠️  Some tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())